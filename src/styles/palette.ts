import type { Palette } from "./type";

export const lightPalette: Palette = {
  textPrimary: "#15202b",
  textSecondary: "#243b53",
  textDisabled: "#52606d",
  backgroundDefault: "#f7fafc",
  backgroundPaper: "#ffffff",
  surfacePrimary: "#fcfdff",
  surfaceSecondary: "#f5f9fc",
  divider: "#d8e2eb",
  outline: "#bcccdc",
  outlineVariant: "#e5edf3",
  primaryMain: "#0f766e",
  primaryLight: "#cbd5e1",
  shadowLight: "rgba(21, 32, 43, 0.06)",
  shadowMedium: "rgba(21, 32, 43, 0.07)",
  shadowDark: "rgba(21, 32, 43, 0.08)",
  shadowPrimary: "rgba(15, 118, 110, 0.2)",
};

export const darkPalette: Palette = {
  textPrimary: "#f5f5f5",
  textSecondary: "#d0d0d0",
  textDisabled: "#a7a7a7",
  backgroundDefault: "#1f1f1f",
  backgroundPaper: "#121212",
  surfacePrimary: "#181818",
  surfaceSecondary: "#242424",
  divider: "rgba(255, 255, 255, 0.08)",
  outline: "rgba(255, 255, 255, 0.12)",
  outlineVariant: "rgba(255, 255, 255, 0.35)",
  primaryMain: "#1DB954",
  primaryLight: "rgba(29, 185, 84, 0.28)",
  shadowLight: "rgba(0, 0, 0, 0.28)",
  shadowMedium: "rgba(0, 0, 0, 0.42)",
  shadowDark: "rgba(0, 0, 0, 0.56)",
  shadowPrimary: "rgba(29, 185, 84, 0.22)",
};

export type AppTheme = {
  mode: "light" | "dark";
  palette: Palette;
};

export const appTheme: AppTheme = {
  mode: "light",
  palette: lightPalette,
};

export const darkTheme: AppTheme = {
  mode: "dark",
  palette: darkPalette,
};
