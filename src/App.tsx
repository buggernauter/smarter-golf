import { ThemeProvider } from "styled-components";

import { useThemeMode } from "./hooks/use-theme-mode";
import { GlobalStyle } from "./global-style";
import { AppLayout } from "./styles/layout";
import { ScoreCardDigital } from "./components/score-card-digital";

export default function App() {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <ScoreCardDigital />
      </AppLayout>
    </ThemeProvider>
  );
}
