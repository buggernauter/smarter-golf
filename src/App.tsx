import { Outlet } from "@tanstack/react-router";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { ThemeModeProvider, useThemeMode } from "./hooks/useThemeMode";

import { StyledAppLayout } from "./styles/layout";

const StyledBaseStyles = createGlobalStyle`
  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    margin: 0;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }
`;

export const App = () => {
  return (
    <ThemeModeProvider>
      <ThemedApp />
    </ThemeModeProvider>
  );
};

const ThemedApp = () => {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <StyledBaseStyles />
      <StyledAppLayout>
        <Outlet />
      </StyledAppLayout>
    </ThemeProvider>
  );
};
