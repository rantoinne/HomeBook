import {
  TextInput,
  ViewStyle,
  StyleSheet,
  TextInputProps,
  ImageSourcePropType,
  LayoutChangeEvent,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, useState, useRef } from 'react';
import {
  INPUT_TYPE,
  convertStyle,
  COLOR_CODE_TYPE,
  BASIC_DIMENSIONS,
  getElementLayout,
} from '@utils';
import { IconRenderer } from '../IconRenderer';
import styles from './styles';
import Animated, {
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
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
    y: 0,
    width: 0,
    height: 0,
  });
  const [inputLabelTextLayoutDimension, setInputLabelTextLayoutDimension] = useState<BASIC_DIMENSIONS>({
    y: 0,
    width: 0,
    height: 0,
  });

  const inputRef = useRef<TextInput>();

  const onInputWrapperLayout = (event: LayoutChangeEvent) => {
    setViewWrapperLayoutDimension(getElementLayout(event));
  }

  const onInputLabelTextLayout = (event: LayoutChangeEvent) => {
    setInputLabelTextLayoutDimension(getElementLayout(event));
  }
  
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

  const focusInputField = () => !inputRef.current.isFocused() && inputRef.current.focus();

  if (type === INPUT_TYPE.FLOATING_LABEL) {
    const labelPosition = useSharedValue(0);
    const labelWrapperPosition = useSharedValue(0);

    const LABEL_LEFT_SPACING = 10;
    const LABEL_WRAPPER_LEFT_SPACING = 7;
    
    const labelAnimatedStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateY: labelPosition.value,
        },
        {
          translateX: LABEL_LEFT_SPACING,
        },
      ]
    }));

    const labelWrapperAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{
        scaleX: labelWrapperPosition.value,
      }, {
        translateX: LABEL_WRAPPER_LEFT_SPACING,
      }],
    }));

    const isInputValueLengthZero = textInputProps.value.length === 0;
    
    const onFocusEvent = () => {
      if (isInputValueLengthZero) {
        labelWrapperPosition.value = withSpring(1, { damping: 20 });
        labelPosition.value = withSpring(-(viewWrapperLayoutDimension.height / 2), { damping: 15 });
      }
    }

    const onBlurEvent = () => {
      if (isInputValueLengthZero) {
        labelPosition.value = withSpring(0, { damping: 15 });
        labelWrapperPosition.value = withSpring(0, { damping: 20 });
      }
    }
    
    return (
      <TouchableOpacity
        onPress={focusInputField}
        onLayout={onInputWrapperLayout}
        style={StyleSheet.flatten([
          styles.containerStyle,
          containerStyle,
        ])}
      >
        {
          viewWrapperLayoutDimension.height > 0 ? (
            <>
              <TextInput
                ref={inputRef}
                {...textInputProps}
                placeholder={null}
                onBlur={onBlurEvent}
                onFocus={onFocusEvent}
                style={StyleSheet.flatten([
                  styles.inputStyle,
                  inputStyle,
                ])}
              />
              <Animated.Text
                onLayout={onInputLabelTextLayout}
                style={[
                labelAnimatedStyle,
                styles.labelStyle,
                { color: textInputProps.placeholderTextColor }
              ]}>
                {textInputProps.placeholder}
              </Animated.Text>
              <Animated.View
                style={[
                  labelWrapperAnimatedStyle,
                  styles.absoluteStyle,
                  {
                    width: inputLabelTextLayoutDimension.width + 8,
                    top: -(containerStyle?.borderWidth || styles.containerStyle.borderWidth),
                    height: containerStyle?.borderWidth || styles.containerStyle.borderWidth,
                    backgroundColor: containerStyle?.backgroundColor || styles.containerStyle.backgroundColor,
                  }
                ]}
              />
            </>
          ) : null
        }
      </TouchableOpacity>
    );
  }

  if (type === INPUT_TYPE.UNDERLINE) {
    const inputUnderlinePosition = useSharedValue(0);

    const inputAnimatedStyle = useAnimatedStyle(() => ({
      transform: [{ scaleX: inputUnderlinePosition.value }]
    }));
    
    const onFocusEvent = () => {
      inputUnderlinePosition.value = withTiming(1, { duration: 350 });
    }

    const onBlurEvent = () => {
      inputUnderlinePosition.value = withTiming(0, { duration: 350 });
    }

    let inputWrapperStyle = Object.keys(containerStyle).length > 0
      ?  {...styles.containerStyle, ...containerStyle}
      : styles.containerStyle;

    inputWrapperStyle = convertStyle(
      inputWrapperStyle,
      [{
        borderWidth: 0,
      }, {
        borderColor: null
      }]
    );
    
    return (
      <View style={styles.completeWidth}>
        <TouchableOpacity style={inputWrapperStyle} onLayout={onInputWrapperLayout}>
        <TextInput
          ref={inputRef}
          {...textInputProps}
          onBlur={onBlurEvent}
          onFocus={onFocusEvent}
          style={StyleSheet.flatten([
            styles.inputStyle,
            inputStyle,
          ])}
        />
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.absoluteStyle,
            styles.underlineStyle,
            {
              width: viewWrapperLayoutDimension.width,
              height: containerStyle.borderWidth || styles.containerStyle.borderWidth,
              backgroundColor: containerStyle.borderColor || styles.containerStyle.borderColor,
            },
            inputAnimatedStyle,
          ]}
        />
      </View>
    );
  }

  if (type === INPUT_TYPE.OUTLINE) {
    return (
      <TouchableOpacity
        style={StyleSheet.flatten([
          styles.containerStyle,
          containerStyle,
        ])}
        onPress={focusInputField}
      >
        <>
        {renderIcon(
          renderLeftIcon,
          leftIcon,
          isLeftIconInsideCard,
          leftIconCardStyle,
        )}
        <TextInput
          ref={inputRef}
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
        </>
      </TouchableOpacity>
    );
  }

  return null;
};
