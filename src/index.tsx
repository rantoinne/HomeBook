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

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: 200, height: 200}}>
        <Text>TEST</Text>
      </View>
      <InputField
        value={'1'}
        leftIcon={ImageLinks.homeBookIcon}
        rightIcon={ImageLinks.homeBookIcon}
        onChangeText={null}
      />
    </SafeAreaView>
  );
};

export default App;
