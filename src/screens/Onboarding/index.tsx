import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { GradientWrapper, InputField } from '@components';
import { INPUT_TYPE, THEME } from '@utils';
import { ImageLinks } from '@images';

interface Props {
  
}

export const Onboarding: FC<Props> = ({

}) => {
  const [inputValue, setInputValue] = useState<string>('');
  
  return (
    <GradientWrapper isScrollEnabled containerStyle={{ justifyContent: 'flex-start', paddingHorizontal: 8 }}>
      <View style={{ marginVertical: 8 }} />
      <View style={{ marginVertical: 8 }} />
      {/* <View style={{ marginVertical: 8 }} />
      <View style={{ marginVertical: 8 }} />
      <View style={{ marginVertical: 8 }} />
      <View style={{ marginVertical: 8 }} />
      <View style={{ marginVertical: 8 }} /> */}
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        onChangeText={setInputValue}
        type={INPUT_TYPE.UNDERLINE}
        leftIcon={ImageLinks.homeBookIcon}
        rightIcon={ImageLinks.homeBookIcon}
        placeholder="Type Here! HEYEYEY"
        placeholderTextColor={THEME.SECONDARY}
        containerStyle={{ width: '100%', backgroundColor: 'white', borderWidth: 2, borderColor: 'violet' }}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="Type Here!"
        placeholderTextColor={THEME.SECONDARY}
        type={INPUT_TYPE.FLOATING_LABEL}
        leftIcon={ImageLinks.homeBookIcon}
        isLeftIconInsideCard
        containerStyle={{ width: '100%', backgroundColor: 'white', borderColor: 'red' }}
        onChangeText={setInputValue}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="1"
        placeholderTextColor={THEME.SECONDARY}
        type={INPUT_TYPE.FLOATING_LABEL}
        containerStyle={{ backgroundColor: 'white', borderColor: 'red' }}
        onChangeText={setInputValue}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="Type Here! Type Here!"
        placeholderTextColor={THEME.SECONDARY}
        type={INPUT_TYPE.FLOATING_LABEL}
        containerStyle={{ backgroundColor: 'white', borderColor: 'red' }}
        onChangeText={setInputValue}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="Type Here!ssa"
        placeholderTextColor={THEME.SECONDARY}
        type={INPUT_TYPE.FLOATING_LABEL}
        containerStyle={{ backgroundColor: 'white', borderColor: 'red' }}
        onChangeText={setInputValue}
      />
      <View style={{ marginVertical: 8 }} />
      <InputField
        value={inputValue}
        placeholder="Type Here! AA KJHSjkahsjaoijslakslka"
        placeholderTextColor="violet"
        leftIcon={ImageLinks.homeBookIcon}
        type={INPUT_TYPE.FLOATING_LABEL}
        containerStyle={{ backgroundColor: 'white', borderColor: 'violet', borderWidth: 4 }}
        onChangeText={setInputValue}
      />
      <View style={{ marginVertical: 8 }} />
    </GradientWrapper>
  );
};
