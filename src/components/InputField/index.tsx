import {
  View,
  TextInput,
  ViewStyle,
  TextInputProps,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React, { FC } from 'react';
import { COLOR_CODE_TYPE, PADDINGS, THEME } from '@utils';
import { IconRenderer } from '../IconRenderer';

interface Props extends TextInputProps {
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  containerStyle?: ViewStyle;
  enableFloatingLabel?: boolean;
  borderColor?: COLOR_CODE_TYPE;
}

export const InputField: FC<Props> = ({
  leftIcon,
  rightIcon,
  borderColor,
  containerStyle,
  enableFloatingLabel = false,
  ...textInputProps
}): React.ReactElement => {
  const renderIcon = (icon: ImageSourcePropType): React.ReactElement => {
    if (icon) return (
      <IconRenderer source={icon} />
    );
    return null;
  }

  return (
    <View
      style={{
        borderColor,
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: THEME.SECONDARY,
        paddingVertical: PADDINGS.MEDIUM,
        paddingHorizontal: PADDINGS.X_SMALL,
      }}
    >
      {renderIcon(leftIcon)}
      <TextInput
        {...textInputProps}
        style={{
          flex: 1,
          paddingHorizontal: PADDINGS.X_SMALL,
        }}
      />
      {renderIcon(rightIcon)}
    </View>
  );
};
