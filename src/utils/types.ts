import { COLOR_CODES_FOR_DARK_THEME, COLOR_CODES_FOR_LIGHT_THEME } from './enums';

export type COLOR_CODE_TYPE = COLOR_CODES_FOR_DARK_THEME | COLOR_CODES_FOR_LIGHT_THEME | string;

export type BASIC_DIMENSIONS = {
  width: number;
  height: number
};
