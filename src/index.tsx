import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {
  InputField,
} from '@components';
import { ImageLinks } from '@images';
import { INPUT_TYPE } from './utils/enums';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: 200, height: 200}}>
        <Text>TEST</Text>
      </View>
      <InputField
        value={'1'}
        type={INPUT_TYPE.OUTLINE}
        leftIcon={ImageLinks.homeBookIcon}
        rightIcon={ImageLinks.homeBookIcon}
        onChangeText={null}
        multiline
      />
    </SafeAreaView>
  );
};

export default App;
