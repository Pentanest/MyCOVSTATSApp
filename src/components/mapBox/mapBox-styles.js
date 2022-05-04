import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  variantBox: {
    flexDirection: 'row',
  },
  variant: {
    width: 11,
    height: 11,
    marginRight: '5%',
  },
  color1: {
    backgroundColor: colors.primaryColor,
  },
  color2: {
    backgroundColor: colors.primaryColorDark,
  },
  variantText: {
    color: colors.textGray,
  },
  upperBox: {
    paddingHorizontal: '3%',
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: colors.textGray,
    paddingVertical: '5%',
  },
  dataContainer: {
    marginRight: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {styles};
