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
