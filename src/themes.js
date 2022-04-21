import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundColor: "#fff",
  primaryColor: "#f7f9f9",
  secundaryColor: "#00ba7c",

  fontColor: "#000",
  inputSearchTextColor: "#536471",
  bioTextColor: "#536471",
  countersTextColor: "#536471",
  footerTextColor: "#536471",

  searchIcon: "#000",
  contentSvgFill: "#000",
  borderPhoto: "#000",
  borderColor: "#eff3f4",
};

export const darkTheme = {
  backgroundColor: "#000",
  primaryColor: "#15202b",
  secundaryColor: "#00ba7c",

  fontColor: "#FFF",
  inputSearchTextColor: "#8b98a5",
  bioTextColor: "#8b98a5",
  countersTextColor: "#8b98a5",
  footerTextColor: "#8b98a5",

  searchIcon: "#8b98a5",
  contentSvgFill: "#FFF",
  borderPhoto: "#8b98a5",
  borderColor: "#2f3336",
};

export const GlobalStyles = createGlobalStyle`
    body { 
        background-color: ${(props) => props.theme.backgroundColor};
    }

    .App-header {
        background-color: ${(props) => props.theme.backgroundColor};
        color:  ${(props) => props.theme.fontColor};
    }

    .App-header .changeTheme {
        color:  ${(props) => props.theme.fontColor};
    }


    .Search {
        background-color: ${(props) => props.theme.primaryColor};
        border: 1px solid ${(props) => props.theme.borderColor};
    }

    span.anticon.anticon-search.search-icon {
        color: ${(props) => props.theme.searchIcon};
    }

    .Search input[type="text"],
    .Search .input-search-text::-webkit-input-placeholder {
        color: ${(props) => props.theme.inputSearchTextColor};
    }       

    .Content {
        background-color: ${(props) => props.theme.primaryColor};
        color:  ${(props) => props.theme.fontColor};
        border: 1px solid ${(props) => props.theme.borderColor};
    }

    .Content svg {
        fill: ${(props) => props.theme.contentSvgFill};
    }

    .user-photo .photo{
        border: 1px solid ${(props) => props.theme.contentSvgFill};
    }

    .user-bio {
        color: ${(props) => props.theme.bioTextColor};
    }

    .user-counters .counters p {
        color: ${(props) => props.theme.countersTextColor};
    }

    .user-footer {
        color: ${(props) => props.theme.countersTextColor};
    }
    
    a:link,
    a:visited {
        color: var(--secundary-color) !important;
        text-decoration: none;
    }
`;
