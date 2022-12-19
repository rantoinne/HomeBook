import {
  View,
  TextInput,
  ViewStyle,
  StyleSheet,
  TextInputProps,
  ImageSourcePropType,
} from 'react-native';
import React, { FC } from 'react';
import { COLOR_CODE_TYPE } from '@utils';
import { IconRenderer } from '../IconRenderer';
import styles from './styles';

interface Props extends TextInputProps {
  inputStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  enableFloatingLabel?: boolean;
  borderColor?: COLOR_CODE_TYPE;
  leftIconCardStyle?: ViewStyle;
  rightIconCardStyle?: ViewStyle;
  leftIcon?: ImageSourcePropType;
  isLeftIconInsideCard?: boolean;
  isRightIconInsideCard?: boolean;
  rightIcon?: ImageSourcePropType;
  renderLeftIcon?: () => React.ReactElement;
  renderRightIcon?: () => React.ReactElement;
}

export const InputField: FC<Props> = ({
  leftIcon,
  rightIcon,
  inputStyle,
  containerStyle,
  leftIconCardStyle,
  rightIconCardStyle,
  renderLeftIcon = null,
  renderRightIcon = null,
  enableFloatingLabel = false,
  isLeftIconInsideCard = false,
  isRightIconInsideCard = false,
  ...textInputProps
}): React.ReactElement => {
  const renderIcon = (
    overrideRenderIconMethod: () => React.ReactElement,
    icon: ImageSourcePropType,
    isInsideCard: boolean,
    iconCardStyle: ViewStyle,
  ): React.ReactElement => {
    if (overrideRenderIconMethod) return overrideRenderIconMethod();
    if (icon) return (
      <IconRenderer
        source={icon}
        cardStyle={iconCardStyle}
        isInsideCard={isInsideCard}
      />
    );
    return null;
  }

  return (
    <View
      style={StyleSheet.flatten([
        styles.containerStyle,
        containerStyle,
      ])}
    >
      {renderIcon(
        renderLeftIcon,
        leftIcon,
        isLeftIconInsideCard,
        leftIconCardStyle,
      )}
      <TextInput
        {...textInputProps}
        style={StyleSheet.flatten([
          styles.inputStyle,
          inputStyle,
        ])}
      />
      {renderIcon(
        renderRightIcon,
        rightIcon,
        isRightIconInsideCard,
        rightIconCardStyle,
      )}
    </View>
  );
};
