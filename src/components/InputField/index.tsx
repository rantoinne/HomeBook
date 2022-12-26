import {
  View,
  TextInput,
  ViewStyle,
  StyleSheet,
  TextInputProps,
  ImageSourcePropType,
} from 'react-native';
import React, { FC } from 'react';
import { COLOR_CODE_TYPE, INPUT_TYPE } from '@utils';
import { IconRenderer } from '../IconRenderer';
import styles from './styles';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

interface Props extends TextInputProps {
  type?: INPUT_TYPE;
  inputStyle?: ViewStyle;
  containerStyle?: ViewStyle;
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

/**
 * 
 * @param leftIcon(optional) Icon to render of left
 * @param rightIcon(optional) Icon to render of right
 * @param inputStyle(optional) Applied to <TextInput />
 * @param type(optional) Denotes the type of <TextInput> to render. One of INPUT_TYPE
 * @param containerStyle(optional) Applied to <View> wrapping TextInput
 * @param borderColor(optional) Border color for <View> wrapping TextInput
 * @param isLeftIconInsideCard(optional) Render @leftIcon inside a Card with border
 * @param isRightIconInsideCard(optional) Render @rightIcon inside a Card with border
 * @param leftIconCardStyle(optional) Applied to left icon. Requires @leftIcon to be NOT NULL
 * @param rightIconCardStyle(optional) Applied to right icon. Requires @rightIcon to be NOT NULL
 * @param renderRightIcon(optional) Override method to render custom right. @rightIcon should be @null
 * @param renderLeftIcon(optional) Override method to render custom leftIcon. @leftIcon should be @null
 * @param TextInputProps Incl. of all TextInput props
 * @returns An Input field
 */
export const InputField: FC<Props> = ({
  leftIcon,
  rightIcon,
  inputStyle,
  containerStyle,
  type = INPUT_TYPE.OUTLINE,
  leftIconCardStyle,
  rightIconCardStyle,
  renderLeftIcon = null,
  renderRightIcon = null,
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

  if (type === INPUT_TYPE.FLOATING_LABEL) {
    const labelPosition = useSharedValue(100);
    
    const labelStyle = useAnimatedStyle(() => {
      return {
        width: labelPosition.value,
      };
    }, []);
    
    const onFocusEvent = () => labelPosition.value = 200;

    const onBlurEvent = () => labelPosition.value = 100;

    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
    
    return (
      <AnimatedTextInput
        {...textInputProps}
        onFocus={onFocusEvent}
        onBlur={onBlurEvent}
        style={StyleSheet.flatten([
          styles.inputStyle,
          inputStyle,
          labelStyle,
        ])}
      />
    );
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
