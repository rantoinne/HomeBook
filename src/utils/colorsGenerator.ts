import {
  COLOR_CODES_FOR_DARK_THEME,
  COLOR_CODES_FOR_LIGHT_THEME,
} from "@utils";

/**
 * @returns type COLOR_CODES based on theme
 */
export const getCurrentTheme = () => {
  const isDarkThemeActive = true;
  return isDarkThemeActive
    ? COLOR_CODES_FOR_DARK_THEME
    : COLOR_CODES_FOR_LIGHT_THEME;
};

/**
 * @description Method to get default colors
 * based on theme
 * @returns [COLOR, COLOR]
 */
export const getGradientColors = () => {
  const currentThemePalette = getCurrentTheme();
  return [
    currentThemePalette.PRIMARY,
    currentThemePalette.SECONDARY,
  ];
};
