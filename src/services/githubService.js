export async function getUser(name) {
  return fetch(`https://api.github.com/users/${name}`)
    .then((response) => response.json())
    .then((data) => data);
}
