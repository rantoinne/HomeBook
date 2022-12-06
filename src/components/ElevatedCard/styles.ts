import { theme } from '@utils';
import { Platform, StyleSheet } from 'react-native';

const shadowColor = theme.SHADOW;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: theme.SECONDARY,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowColor: shadowColor,
      },
      android: {
        elevation: 4,
      },
    }),
  }
});

export default styles;
