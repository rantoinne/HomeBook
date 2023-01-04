import { StyleSheet } from 'react-native';
import { CAROUSEL_SAFE_HORIZONTAL_INSETS, windowDimensions } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginHorizontal: CAROUSEL_SAFE_HORIZONTAL_INSETS,
    width: windowDimensions.width - CAROUSEL_SAFE_HORIZONTAL_INSETS * 2,
  },
  title: {
    fontSize: 32,
  },
});

export default styles;
