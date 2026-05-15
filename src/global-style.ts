import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: ${({ theme }) => theme.mode};
  }

  body {
    margin: 0;
    background:
      ${({ theme }) =>
        theme.mode === "dark"
          ? `
      radial-gradient(circle at top, rgba(255, 255, 255, 0.045) 0%, transparent 38%),
      radial-gradient(circle at 20% 12%, rgba(29, 185, 84, 0.08) 0%, transparent 22%),
      linear-gradient(180deg, #191919 0%, ${theme.palette.backgroundPaper} 56%, #101010 100%)
    `
          : `
      radial-gradient(circle at top, ${theme.palette.backgroundDefault} 0%, transparent 45%),
      ${theme.palette.backgroundPaper}
    `};
    color: ${({ theme }) => theme.palette.textPrimary};
    transition:
      background 220ms ease,
      color 180ms ease;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: ${({ theme }) =>
      theme.mode === "dark"
        ? `
      radial-gradient(circle at 50% -10%, rgba(255, 255, 255, 0.035) 0%, transparent 34%),
      radial-gradient(circle at 85% 18%, rgba(255, 255, 255, 0.025) 0%, transparent 24%)
    `
        : "none"};
    opacity: ${({ theme }) => (theme.mode === "dark" ? 1 : 0)};
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }
`;
