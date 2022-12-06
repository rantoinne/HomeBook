import { ImageProps, TextInputProps, ViewStyle } from 'react-native';
import React, { FC } from 'react';

interface Props extends TextInputProps {
  leftIcon?: ImageProps;
  rightIcon?: ImageProps;
  containerStyle?: ViewStyle;
  enableFloatingLabel?: boolean;
}

export const InputField: FC<Props> = ({
  value,
  leftIcon,
  rightIcon,
  placeholder,
  placeholderTextColor,
  maxLength = undefined,
  secureTextEntry = false,
  enableFloatingLabel = false,
}): React.ReactElement => {
  return (
    null
  );
};
