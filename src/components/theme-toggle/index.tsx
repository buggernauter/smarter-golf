import { SunMoon } from "lucide-react";

import { useThemeMode } from "../../hooks/useThemeMode";
import { StyledThemeToggle } from "./styles";

export const ThemeToggleButton = () => {
  const { themeMode, toggleTheme } = useThemeMode();
  const nextMode = themeMode === "dark" ? "light" : "dark";

  return (
    <StyledThemeToggle
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextMode} theme`}
      title={`Switch to ${nextMode} theme`}
    >
      <SunMoon aria-hidden="true" />
    </StyledThemeToggle>
  );
};
