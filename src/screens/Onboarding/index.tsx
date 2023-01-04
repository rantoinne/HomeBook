import React, { FC, useState } from 'react';
import { Carousel, GradientWrapper } from '@components';

interface Props {
  
}

export const Onboarding: FC<Props> = ({

}) => {
  const [inputValue, setInputValue] = useState<string>('');
  
  return (
    <GradientWrapper containerStyle={{ width: '100%', justifyContent: 'flex-start' }}>
      <Carousel />
    </GradientWrapper>
  );
};
