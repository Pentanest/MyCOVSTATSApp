import {StyleSheet, Platform} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: '6%',
    height: '94%',
    marginHorizontal: '5%',
    borderWidth: 0.3,
    borderColor: colors.textGray,
    borderRadius: 10,
    paddingVertical: '5%',
    paddingHorizontal: '4%',
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  subTitle: {
    marginTop: '3%',
    color: colors.textGray,
  },
  listContainer: {
    marginTop: '5%',
    height: Platform.OS === 'ios' ? '90%' : '87%',
  },
  countryBox: {
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: colors.textGray,
    borderRadius: 10,
    paddingVertical: Platform.OS === 'ios' ? '6.5%' : '6.1%',
    paddingHorizontal: '4%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: Platform.OS === 'ios' ? '3%' : '2%',
    justifyContent: 'space-between',
  },
  countryName: {
    fontSize: 20,
    marginLeft: '15%',
  },
  dataContainer: {
    flexDirection: 'row',
  },
  affectedNum: {
    fontWeight: '600',
    fontSize: 15,
    marginRight: '5%',
  },
});

export {styles};
