import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #f59e0b; /* amber-500 */
    --primary-hover: #d97706; /* amber-600 */
    --bg-light: #f9fafb; /* gray-50 */
    --bg-dark: #171717; /* neutral-900 */
    --text-primary: #111827; /* gray-900 */
    --text-secondary: #4b5563; /* gray-600 */
  }

  /* Basic CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: var(--font-open-sans), sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    background-color: var(--bg-light);
    color: var(--text-primary);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-work-sans), sans-serif;
  }
`;
