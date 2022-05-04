import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  mainImage: {
    shadowColor: colors.shadow,
    shadowOffset: {width: -2, height: 12},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  mainTitle: {fontSize: 30, fontWeight: '500'},
  subTitle: {
    fontSize: 15,
    color: colors.textGray,
    marginHorizontal: '7%',
    marginTop: '5%',
    textAlign: 'center',
  },
});
export {styles};
