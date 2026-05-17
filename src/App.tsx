import { ThemeProvider } from "styled-components";

import { DesktopNotice } from "./components/desktop-notice/desktop-notice";
import { useThemeMode } from "./hooks/use-theme-mode";
import { StyledGlobalStyle } from "./global-style";
import { StyledAppLayout } from "./styles/layout";
import { ScoreTrackerPage } from "./components/score-card-digital";

export default function App() {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <StyledGlobalStyle />
      <StyledAppLayout>
        <DesktopNotice>
          <ScoreTrackerPage />
        </DesktopNotice>
      </StyledAppLayout>
    </ThemeProvider>
  );
}
