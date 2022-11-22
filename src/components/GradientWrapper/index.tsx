import { getGradientColors } from '@utils';
import {
  StyleSheet,
  ViewStyle
} from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import styles from './styles';

interface Props extends LinearGradientProps {
  containerStyle?: ViewStyle;
}

/**
 * @end Coordinates for gradient
 * @start Coordinates for gradient
 * @colors Array of colors used as Gradient 
 * @containerStyle Additional style for wrapper component
 * 
 * @returns {React.ReactElement}
 */
const GradientWrapper: FC<PropsWithChildren<Props>> = ({
  colors,
  containerStyle,
  children = null,
  end = { x: 1, y: 1},
  start = { x: 0, y: 0},
}): React.ReactElement => {
  return (
    <LinearGradient
      end={end}
      start={start}
      colors={colors || getGradientColors()}
      style={StyleSheet.flatten([styles.container, containerStyle])}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientWrapper;
