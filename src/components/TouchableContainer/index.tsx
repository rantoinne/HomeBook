import {
  ViewStyle,
  StyleSheet,
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback,
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
  containerStyle,
  children = <></>,
  ...touchableProps
}): React.ReactElement => {
  return (
    <TouchableWithoutFeedback
      {...{touchableProps}}
      style={StyleSheet.flatten([styles.containerStyle, containerStyle])}
    >
      <>
        {children}
      </>
    </TouchableWithoutFeedback>
  );
};
