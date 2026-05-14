export const palette = {
  textPrimary: "#15202b",
  textSecondary: "#243b53",
  textMuted: "#52606d",
  surfaceBase: "#ffffff",
  surfaceSubtle: "#fcfdff",
  surfaceSoft: "#f7fafc",
  surfaceMuted: "#f5f9fc",
  borderBase: "#d8e2eb",
  borderStrong: "#bcccdc",
  borderSoft: "#e5edf3",
  accentBase: "#0f766e",
  accentMuted: "#cbd5e1",
  shadowSoft: "rgba(21, 32, 43, 0.06)",
  shadowBase: "rgba(21, 32, 43, 0.07)",
  shadowStrong: "rgba(21, 32, 43, 0.08)",
  shadowAccent: "rgba(15, 118, 110, 0.2)",
} as const;
export const darkPalette = {
  textPrimary: "#f5f5f5",
  textSecondary: "#d0d0d0",
  textMuted: "#a7a7a7",
  surfaceBase: "#121212",
  surfaceSubtle: "#181818",
  surfaceSoft: "#1f1f1f",
  surfaceMuted: "#242424",
  borderBase: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.12)",
  borderSoft: "rgba(255, 255, 255, 0.05)",
  accentBase: "#1DB954",
  accentMuted: "rgba(29, 185, 84, 0.28)",
  shadowSoft: "rgba(0, 0, 0, 0.28)",
  shadowBase: "rgba(0, 0, 0, 0.42)",
  shadowStrong: "rgba(0, 0, 0, 0.56)",
  shadowAccent: "rgba(29, 185, 84, 0.22)",
} as const;

export type ThemePalette = {
  [K in keyof typeof palette]: string;
};

export type AppTheme = {
  mode: "light" | "dark";
  palette: ThemePalette;
};

export const appTheme: AppTheme = {
  mode: "light",
  palette,
};

export const darkTheme: AppTheme = {
  mode: "dark",
  palette: darkPalette,
};

export type Palette = ThemePalette;
