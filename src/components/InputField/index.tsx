import {
  View,
  TextInput,
  ViewStyle,
  StyleSheet,
  TextInputProps,
  ImageSourcePropType,
  LayoutChangeEvent,
} from 'react-native';
import React, { FC, useState } from 'react';
import { BASIC_DIMENSIONS, COLOR_CODE_TYPE, getElementLayout, INPUT_TYPE } from '@utils';
import { IconRenderer } from '../IconRenderer';
import styles from './styles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

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
  const [viewWrapperLayoutDimension, setViewWrapperLayoutDimension] = useState<BASIC_DIMENSIONS>({
    width: 0,
    height: 0,
  });
  
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
    const labelPosition = useSharedValue(0);
    const labelWrapperPosition = useSharedValue(0);
    
    const labelAnimatedStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateY: labelPosition.value,
        },
        {
          translateX: Math.abs(labelPosition.value) * 0.40,
        },
      ]
    }));

    const labelWrapperAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{ scaleX: labelWrapperPosition.value }],
    }));
    
    const onFocusEvent = () => {
      labelWrapperPosition.value = withSpring(1);
      labelPosition.value = withSpring(-(viewWrapperLayoutDimension.height / 2));
    }

    const onBlurEvent = () => {
      labelPosition.value = withSpring(0);
      labelWrapperPosition.value = withSpring(0);
    }

    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

    const onInputWrapperLayout = (event: LayoutChangeEvent) => {
      setViewWrapperLayoutDimension(getElementLayout(event));
    }
    
    return (
      <View
        onLayout={onInputWrapperLayout}
        style={StyleSheet.flatten([
          styles.containerStyle,
          containerStyle,
        ])}
      >
        {
          viewWrapperLayoutDimension.height > 0 ? (
            <>
              <Animated.Text style={[
                labelAnimatedStyle,
                {
                  color: textInputProps.placeholderTextColor,
                  zIndex: 10,
                }
              ]}>
                {textInputProps.placeholder}
              </Animated.Text>
              <AnimatedTextInput
                placeholder={null}
                {...{textInputProps}}
                onBlur={onBlurEvent}
                onFocus={onFocusEvent}
                style={StyleSheet.flatten([
                  styles.inputStyle,
                  inputStyle,
                ])}
              />
              <Animated.View
                style={[
                  labelWrapperAnimatedStyle,
                  {
                    left: 8, // Update required for calculating this value
                    position: 'absolute',
                    width: textInputProps.placeholder.length * 8,
                    top: -(viewWrapperLayoutDimension.height / 40) || 0, // Update required for calculating this value
                    height: containerStyle?.borderWidth || styles.containerStyle.borderWidth,
                    backgroundColor: containerStyle?.backgroundColor || styles.containerStyle.backgroundColor,
                  }
                ]}
              />
            </>
          ) : null
        }
      </View>
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
        {...{textInputProps}}
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
