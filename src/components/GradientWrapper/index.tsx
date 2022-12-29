import { getGradientColors } from '@utils';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface Props {
  isScrollEnabled?: boolean;
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
 * @isScrollEnabled If true converts the GradientWrapper into a Scrollable Wrapper
 *
 * @returns Gradient Wrapped View
 */
export const GradientWrapper: FC<PropsWithChildren<Props>> = ({
  containerStyle,
  children = null,
  isScrollEnabled = false,
  end = { x: 1, y: 1 },
  start = { x: 0, y: 0 },
  gradientColors = getGradientColors(),
}): React.ReactElement => {
  return (
    <LinearGradient
      end={end}
      start={start}
      colors={gradientColors}
      style={StyleSheet.flatten([styles.container, containerStyle])}>
        <ScrollView
          scrollEnabled={isScrollEnabled}
          contentContainerStyle={StyleSheet.flatten([styles.container, containerStyle])}
        >
          {children}
        </ScrollView>
    </LinearGradient>
  );
};
