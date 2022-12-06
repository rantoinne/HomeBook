import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {
  ElevatedCard,
} from '@components';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: 200, height: 200}}>
        <Text>TEST</Text>
      </View>
      <ElevatedCard>
        <Text>Hey Doc!</Text>
      </ElevatedCard>
    </SafeAreaView>
  );
};

export default App;
