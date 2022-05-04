import {Platform, StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  wholeDrawer: {flex: 1},
  mainContainer: {backgroundColor: colors.primaryColor},
  userImg: {margin: '10%'},
  avatar: {borderRadius: 20, overflow: 'hidden'},
  fontWeight: 'bold',
  userName: {
    fontSize: 21,
    color: colors.black,
    marginLeft: '10%',
    fontWeight: 'bold',
  },
  userLevel: {
    marginLeft: '10%',
    marginVertical: '6%',
    width: '45%',
  },
  locationBtn: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  drawer: {backgroundColor: colors.white, paddingTop: '2%'},
  signInContainer: {flexDirection: 'row'},
  signInText: {fontSize: 19, marginLeft: 21},
  signUpTouchable: {paddingVertical: Platform.OS === 'ios' ? 15 : 0},
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? '5%' : '9%',
  },
  signUpText: {fontSize: 19, marginLeft: 21},
});

export {styles};
