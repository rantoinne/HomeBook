import React, { FC, useRef } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
    title: 'Second Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6322',
    title: 'Second Item',
  },
];

interface Props {
  keyName?: string;
}

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const Carousel: FC<Props> = ({
  keyName = 'id'
}) => {
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <>
      <FlatList
        horizontal
        data={DATA}
        pagingEnabled
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={item => item[keyName]}
      />
    </>
  );
}
