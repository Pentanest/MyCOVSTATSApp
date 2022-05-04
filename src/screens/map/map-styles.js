import {Platform, StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  titleText: {marginBottom: '5%', fontWeight: '500'},
  countryText: {marginBottom: '6%'},
  listContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  lowerBox: {
    marginTop: Platform.OS === 'ios' ? '10%' : '5%',
    borderWidth: 0.3,
    borderColor: colors.textGray,
    borderRadius: 10,
    paddingHorizontal: '5%',
    paddingTop: '5%',
    paddingBottom: '10%',
    height: Platform.OS === 'ios' ? '46.5%' : '48%',
  },
  scrollContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    backgroundColor: colors.white,
    flex: 1,
  },
  dataBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: colors.textGray,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    marginVertical: Platform.OS === 'ios' ? '8%' : '8%',
  },
  circularBorder: {
    width: 87,
    height: 115,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 32,
    zIndex: -1,
    position: 'absolute',
  },
  rectangleBorder: {
    width: 100,
    height: 75,
    borderRadius: 10,
    marginLeft: -7,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataContainer: {
    marginRight: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  affectedText: {color: colors.textGray},
  recoveredText: {color: colors.textGray},
});

export {styles};
