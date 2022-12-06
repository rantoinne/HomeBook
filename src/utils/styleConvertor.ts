/**
 * @param styleToUpdate Specific property on @styleObject
 * @param styleObject A StyleSheet object containing `n` properties
 * @param styleValueToUpdateWith Value used to update @styleToUpdate property
 * @returns StylePropertiesObject
 */
export const covertStyle = (
  styleObject: any,
  styleToUpdate: string,
  styleValueToUpdateWith: any,
) => {
  styleObject[styleToUpdate] = styleValueToUpdateWith;
  return styleObject;
}