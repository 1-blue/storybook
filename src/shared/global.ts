import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const bodyStyles = css`
  padding: 3em;
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  body{
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    margin-bottom: 100px;

    color: ${({ theme }) => theme.colors.color};
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
  ol, ul, li{
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  /** FIXME: 애니메이션 */
  @-webkit-keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.5);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.8);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.5);
    }
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.5);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.8);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.5);
    }
  }
`;
