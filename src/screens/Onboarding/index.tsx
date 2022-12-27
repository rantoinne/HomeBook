import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { GradientWrapper, InputField } from '@components';
import { INPUT_TYPE, THEME } from '@utils';

interface Props {
  
}

export const Onboarding: FC<Props> = ({

}) => {
  const [inputValue, setInputValue] = useState<string>('');
  
  return (
    <GradientWrapper>
      <Text>Onboarding Screens</Text>
      <InputField
        value={inputValue}
        placeholder="Type Here!"
        placeholderTextColor={THEME.SECONDARY}
        type={INPUT_TYPE.FLOATING_LABEL}
        onChangeText={val => setInputValue(val)}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="Type Here!"
        placeholderTextColor={'orange'}
        type={INPUT_TYPE.FLOATING_LABEL}
        onChangeText={val => setInputValue(val)}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="Type Here!"
        placeholderTextColor={THEME.SECONDARY}
        type={INPUT_TYPE.FLOATING_LABEL}
        containerStyle={{ backgroundColor: 'cyan' }}
        onChangeText={val => setInputValue(val)}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="Type Here!"
        placeholderTextColor={THEME.SECONDARY}
        type={INPUT_TYPE.FLOATING_LABEL}
        onChangeText={val => setInputValue(val)}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="Type Here!"
        placeholderTextColor={THEME.SECONDARY}
        type={INPUT_TYPE.FLOATING_LABEL}
        onChangeText={val => setInputValue(val)}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="Type Here!"
        type={INPUT_TYPE.OUTLINE}
        onChangeText={val => setInputValue(val)}
      />
    </GradientWrapper>
  );
};
