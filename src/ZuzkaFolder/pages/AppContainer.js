import React from "react";
import Routes from "./Routes";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => (props.whiteColor ? "white" : "black")};
    margin: 0;
    padding: 0;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a:hover, a:visited, a:link, a:active
{
    text-decoration: none;
}
`;

const AppContainer = () => {
  return (
    <React.Fragment>
      <GlobalStyle whiteColor />
      <Routes />
    </React.Fragment>
  );
};

export default AppContainer;
