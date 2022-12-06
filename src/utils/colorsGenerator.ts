import { COLOR_CODES_FOR_DARK_THEME, COLOR_CODES_FOR_LIGHT_THEME } from './';

/**
 * @returns @type {COLOR_CODES} based on theme
 */
export const getCurrentTheme = () => {
  const isDarkThemeActive = false;
  return isDarkThemeActive ? COLOR_CODES_FOR_DARK_THEME : COLOR_CODES_FOR_LIGHT_THEME;
};

/**
 * @description Method to get default colors
 * based on theme
 * @returns [COLOR, COLOR]
 */
export const getGradientColors = () => {
  const currentThemePalette = getCurrentTheme();
  console.log({ currentThemePalette });
  
  return [currentThemePalette.PRIMARY, currentThemePalette.SECONDARY];
};

/**
 * @returns A color palette with current
 * theme selected
 */
export const THEME = getCurrentTheme();
