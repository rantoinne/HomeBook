import { PADDINGS, THEME } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: THEME.OUTLINE,
    backgroundColor: THEME.OUTLINE,
    justifyContent: 'space-between',
    paddingVertical: PADDINGS.MEDIUM,
    paddingHorizontal: PADDINGS.X_SMALL,
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: PADDINGS.X_SMALL,
  },
});

export default styles;
