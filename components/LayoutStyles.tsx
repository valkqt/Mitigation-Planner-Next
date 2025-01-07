import css from "styled-jsx/css";

export const layoutStyle = css`
  .bold {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #000;
    display: inline-block;
  }

  .left a[data-active="true"] {
    color: gray;
  }

  a + a {
    margin-left: 1rem;
  }
`;

export const globalStyle = css.global`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    background: rgba(0, 0, 0, 0.05);
  }

  input,
  textarea {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
