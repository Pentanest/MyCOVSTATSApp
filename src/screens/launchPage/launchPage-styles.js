import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  launchPage: {
    flex: 1,
    alignItems: 'center',
  },
  brandContainer: {
    paddingTop: '35%',
  },
  brandName: {
    color: colors.primaryColor,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: '10%',
  },
  footer: {
    paddingTop: '75%',
  },
});

export {styles};
