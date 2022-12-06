import { Image, ImageProps, ImageSourcePropType, StyleSheet } from 'react-native';
import React, { FC } from 'react';

import styles from './styles';

interface Props {
  imageStyle?: ImageProps;
  source: ImageSourcePropType;
}

/**
 * 
 * @param source A source for icon/image to render
 * @param imageStyle(optional) style property
 * @returns Image component
 */
export const IconRenderer: FC<Props> = ({
  source,
  imageStyle,
}): React.ReactElement => {
  return (
    <Image
      source={source}
      style={StyleSheet.flatten([imageStyle, styles.imageStyle])}
    />
  );
};
