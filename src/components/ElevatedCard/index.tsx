import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { COLOR_CODES_FOR_DARK_THEME, COLOR_CODES_FOR_LIGHT_THEME, covertStyle, THEME } from '@utils';

import styles from './styles';

interface Props {
  containerStyle?: ViewStyle;
  shadowColor?: COLOR_CODES_FOR_DARK_THEME | COLOR_CODES_FOR_LIGHT_THEME;
}

/**
 * @shadowColor A color string to denote shadow
 * @containerStyle Additional style for wrapper component
 *
 * @returns A card with shadow
 */
export const ElevatedCard: FC<PropsWithChildren<Props>> = ({
  containerStyle,
  children = null,
  shadowColor,
}): React.ReactElement => {
  if (!shadowColor) {
    shadowColor = THEME.SHADOW;
  }
  
  styles.containerStyle = covertStyle(
    styles.containerStyle,
    'shadowColor',
    shadowColor,
  );
  
  return (
    <View
      style={StyleSheet.flatten([styles.containerStyle, containerStyle])}
    >
      {children}
    </View>
  );
};
