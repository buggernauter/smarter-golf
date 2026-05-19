import { ThemeProvider } from "styled-components";

import { DesktopNotice } from "./components/desktop-notice/desktop-notice";
import { useThemeMode } from "./hooks/useThemeMode";
import { StyledGlobalStyle } from "./global-style";
import { RoundTrackerPage } from "./pages/round-tracker-page";
import { StyledAppLayout } from "./styles/layout";

export default function App() {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <StyledGlobalStyle />
      <StyledAppLayout>
        <DesktopNotice>
          <RoundTrackerPage />
        </DesktopNotice>
      </StyledAppLayout>
    </ThemeProvider>
  );
}
