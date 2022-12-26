import React, { FC } from 'react';
import { Text } from 'react-native';
import { GradientWrapper, InputField } from '@components';
import { INPUT_TYPE } from '@utils';

interface Props {
  
}

export const Onboarding: FC<Props> = ({

}) => {
  return (
    <GradientWrapper>
      <Text>Onboarding Screens</Text>
      <InputField
        value={'1'}
        type={INPUT_TYPE.FLOATING_LABEL}
        onChangeText={null}
      />
    </GradientWrapper>
  );
};
