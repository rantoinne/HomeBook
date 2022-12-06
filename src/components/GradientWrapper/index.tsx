import { getGradientColors } from '@utils';
import { StyleSheet, ViewStyle } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface Props {
  containerStyle?: ViewStyle;
  end?: { x: number, y: number };
  start?: { x: number, y: number };
  gradientColors?: string[] | number[];
}

/**
 * @end Coordinates for gradient
 * @start Coordinates for gradient
 * @gradientColors Array of colors used as Gradient
 * @containerStyle Additional style for wrapper component
 *
 * @returns Gradient Wrapped View
 */
export const GradientWrapper: FC<PropsWithChildren<Props>> = ({
  containerStyle,
  children = null,
  end = { x: 1, y: 1 },
  start = { x: 0, y: 0 },
  gradientColors = getGradientColors(),
}): React.ReactElement => {
  return (
    <LinearGradient
      end={end}
      start={start}
      colors={gradientColors}
      style={StyleSheet.flatten([containerStyle, styles.container])}>
      {children}
    </LinearGradient>
  );
};
