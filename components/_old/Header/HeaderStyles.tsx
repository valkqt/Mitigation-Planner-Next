import css from "styled-jsx/css";

export const loginStyle = css`
  a {
    text-decoration: none;
    color: var(--geist-foreground);
    display: inline-block;
  }

  a + a {
    margin-left: 1rem;
  }

  .right {
    margin-left: auto;
  }

  .right a {
    border: 1px solid var(--geist-foreground);
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }
`;

export const signoutStyle = css`
  a {
    text-decoration: none;
    color: var(--geist-foreground);
    display: inline-block;
  }

  p {
    display: inline-block;
    font-size: 13px;
    padding-right: 1rem;
  }

  a + a {
    margin-left: 1rem;
  }

  .right {
    margin-left: auto;
  }

  .right a {
    border: 1px solid var(--geist-foreground);
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }

  button {
    border: none;
  }
`;

export const draftStyle = css`
  .bold {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: var(--geist-foreground);
    display: inline-block;
  }

  .left a[data-active="true"] {
    color: gray;
  }

  a + a {
    margin-left: 1rem;
  }
`;

export const loadingStyle = css`
  .bold {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: var(--geist-foreground);
    display: inline-block;
  }

  .left a[data-active="true"] {
    color: gray;
  }

  a + a {
    margin-left: 1rem;
  }
`;
