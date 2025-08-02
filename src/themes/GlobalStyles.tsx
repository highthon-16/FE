import { Global, css } from "@emotion/react";
import { theme } from "./theme";

const globalStyles = css`
  html,
  body {
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    color: ${theme.color.black};
    background-color: ${theme.color.white};
  }

  #root {
    width: 100%;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;

const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
