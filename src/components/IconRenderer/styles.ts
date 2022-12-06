import { IMAGE_DIMENSIONS } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: 'contain',
    width: IMAGE_DIMENSIONS.REGULAR,
    height: IMAGE_DIMENSIONS.REGULAR,
  },
});

export default styles;
