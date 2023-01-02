import {
  ViewStyle,
  StyleSheet,
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { FC, PropsWithChildren } from 'react';

import styles from './styles';

interface Props extends TouchableWithoutFeedbackProps {
  containerStyle?: ViewStyle;
}

/**
 * @type {TouchableWithoutFeedbackProps} Props by TouchableTouchableWithoutFeedback component
 * @containerStyle Additional style for wrapper component
 *
 * @returns A card with shadow
 */
export const TouchableContainer: FC<PropsWithChildren<Props>> = ({
  onLayout,
  containerStyle,
  children = <></>,
  ...touchableProps
}): React.ReactElement => {
  return (
    <View
      onLayout={onLayout}
      style={StyleSheet.flatten([styles.containerStyle, containerStyle])}
    >
      <TouchableWithoutFeedback
        {...touchableProps}
        onPress={touchableProps.onPress}
        style={StyleSheet.flatten([styles.containerStyle])}
      >
        <>
          {children}
        </>
      </TouchableWithoutFeedback>
    </View>
  );
};
