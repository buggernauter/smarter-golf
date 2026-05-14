import { useState } from "react";
import { ThemeProvider } from "styled-components";

import ScoreCardDigital from "./components/score-card-digital";
import ScoreCardPrint from "./components/score-card-print";
import { useThemeMode } from "./hooks/use-theme-mode";
import { GlobalStyle } from "./styles/global-style";
import { AppLayout } from "./styles/layout";
import { Navbar } from "./components/navbar/navbar";

export default function App() {
  const [showDigital, setShoDigital] = useState(true);
  const { isDarkTheme, theme, toggleTheme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Navbar
          isDarkTheme={isDarkTheme}
          showDigital={showDigital}
          onToggleCard={() => setShoDigital((prev) => !prev)}
          onToggleTheme={toggleTheme}
        />
        {showDigital ? <ScoreCardDigital /> : <ScoreCardPrint />}
      </AppLayout>
    </ThemeProvider>
  );
}
