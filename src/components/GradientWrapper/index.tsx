import React, { FC, PropsWithChildren } from 'react';
import { getGradientColors } from '@utils';
import {
  ViewStyle
} from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

interface Props extends LinearGradientProps {
  containerStyle?: ViewStyle;
}

const GradientWrapper: FC<PropsWithChildren<Props>> = ({
  colors,
  containerStyle,
  end = { x: 1, y: 1},
  start = { x: 0, y: 0},
}) => {
  return (
    <LinearGradient
      end={end}
      start={start}
      style={containerStyle || {}}
      colors={colors || getGradientColors()}
    >

    </LinearGradient>
  );
};

export default GradientWrapper;
