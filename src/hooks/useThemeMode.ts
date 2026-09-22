import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import { appTheme, darkTheme, type AppTheme } from "../styles/palette";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "theme-mode";

type ThemeModeContextValue = {
  theme: AppTheme;
  themeMode: ThemeMode;
  isDarkTheme: boolean;
  setThemeMode: Dispatch<SetStateAction<ThemeMode>>;
  toggleTheme: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

const getInitialThemeMode = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const currentTheme = window.localStorage.getItem(STORAGE_KEY);

  if (currentTheme === "light" || currentTheme === "dark") {
    return currentTheme;
  }

  return "dark";
};

const useThemeModeState = (): ThemeModeContextValue => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialThemeMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, themeMode);
    document.documentElement.style.colorScheme = themeMode;
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme: AppTheme = themeMode === "dark" ? darkTheme : appTheme;

  return {
    theme,
    themeMode,
    isDarkTheme: themeMode === "dark",
    setThemeMode,
    toggleTheme,
  };
};

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const themeMode = useThemeModeState();

  return createElement(
    ThemeModeContext.Provider,
    { value: themeMode },
    children,
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }

  return context;
};
