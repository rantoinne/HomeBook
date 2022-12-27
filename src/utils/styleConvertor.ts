import { SPACE_DIRECTION } from "./enums";

/**
 * @param styleToUpdate Specific property on @styleObject
 * @param stylesToUpdate A StyleSheet array of objects containing `n` properties
 * and their values to update
 * @returns StylePropertiesObject
 */
export const convertStyle = (
  styleObject: any,
  stylesToUpdate: {
    [key: string]: string
  }[],
) => {
  stylesToUpdate?.forEach(style => {
    styleObject[Object.keys(style)[0]] = style[Object.keys(style)[0]];
  })
  return styleObject;
}

export const getStyleMarginsFrom = (
  direction: SPACE_DIRECTION,
  styleObject: { [key: string]: string | number },
): number => {
  return 0;
};
