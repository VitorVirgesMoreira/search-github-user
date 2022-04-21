import "./App.css";
import {
  SearchOutlined,
  EnvironmentOutlined,
  LinkOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { ReactComponent as CompanyLogo } from "./assets/c1d1ccb5568f90d979c1aaac2977a2c2.svg";
import { getUser } from "./services/githubService";
import { useState } from "react";
import moment from "moment";

import "moment/locale/pt-br";
function App() {
  moment.locale("pt-br");
  const [response, setResponse] = useState({
    avatar_url: "",
    name: "",
    created_at: "",
    login: "",
    html_url: "",
    bio: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    location: "",
    twitter_username: "",
    blog: "",
    company: "",
  });
  const [username, setUsername] = useState("");

  async function handleClick() {
    const user = await getUser(username);
    setResponse(user);
  }

  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <p>Git finder</p>
        </header>

        <div className="Search">
          <SearchOutlined className="search-icon" />
          <input
            className="input-search-text"
            type="text"
            placeholder="Digite o username do GitHub"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="search-button"
            onClick={handleClick}
          >
            Pesquisar
          </button>
        </div>

        <div className="Content">
          <div className="user-photo">
            <img
              className="photo"
              src={
                response.avatar_url
                  ? response.avatar_url
                  : "https://avatars.githubusercontent.com/u/583231?v=4"
              }
              alt="user_photo"
            />
          </div>
          <div className="form-group">
            <div className="user-header">
              <div className="infos">
                <label className="name">
                  {response.name
                    ? response.name
                    : response.login || "Nome do usuário"}
                </label>
                {response.created_at ? (
                  <label className="created-at">
                    Entrou {moment(response.created_at).format("d MMM YYYY")}
                  </label>
                ) : (
                  <></>
                )}
              </div>
              {response.login ? (
                <a
                  className="github-link"
                  href={response.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{response.login}
                </a>
              ) : (
                <></>
              )}
            </div>

            <div className="user-bio">
              <p>
                {response.bio
                  ? response.bio
                  : "Esse perfil não possui biografia"}
              </p>
            </div>

            <div className="user-counters">
              <div className="counters">
                <p>Repos</p>
                <label>{response.public_repos}</label>
              </div>
              <div className="counters">
                <p>Seguidores</p>
                <label>{response.followers}</label>
              </div>
              <div className="counters">
                <p>Seguindo</p>
                <label>{response.following}</label>
              </div>
            </div>

            <div className="user-footer">
              <div className="footer-info">
                <EnvironmentOutlined />
                <label>
                  {response.location ? response.location : "Não disponível"}
                </label>
              </div>
              <div className="footer-info">
                <TwitterOutlined />
                {response.twitter_username ? (
                  <a href={"https://twitter.com/"}>
                    @{response.twitter_username}
                  </a>
                ) : (
                  <label>Não disponível</label>
                )}
              </div>
              <div className="footer-info">
                <LinkOutlined />
                {response.blog ? (
                  <a href={response.blog}>{response.blog}</a>
                ) : (
                  <label>Não disponível</label>
                )}
              </div>
              <div className="footer-info">
                <CompanyLogo />
                <label>
                  {response.company ? response.company : "Não disponível"}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
