import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {useIsFocused, useScrollToTop} from '@react-navigation/native';
import {SvgUri} from 'react-native-svg';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {apiFetching} from '../../network/apiFetching';
import {countryNameTrimmer} from '../../utils/stringShortener';

import {styles} from './home-styles';
import colors from '../../theme/colors';

const Home = () => {
  const isFocused = useIsFocused();
  const [isFetched, setFetched] = useState(false);
  const [covidData, setCovidData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const ref = useRef(null);
  useScrollToTop(ref);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiFetching();
        setCovidData(data);
        setFetched(true);
      } catch (error) {
        console.log(error);
      }
    }
    if (isFocused) {
      fetchData();
    } else {
      setFetched(false);
    }
  }, [isFocused]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const data = await apiFetching();
      setCovidData(data);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.countryBox}>
      <View style={{flexDirection: 'row'}}>
        <SvgUri width="40" height="27" uri={item.countryFlag} />
        <Text style={styles.countryName}>
          {countryNameTrimmer(item.country)}
        </Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.affectedNum}>
          {Number(item.affected).toLocaleString()}
        </Text>
        <Ionicons
          name={
            item.recovered > 10000000
              ? 'chevron-down-outline'
              : 'chevron-up-outline'
          }
          color={item.recovered > 10000000 ? colors.green : colors.red}
          size={18}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.mainContainer}>
        {isFetched ? (
          <View>
            <Text style={styles.title}>Live Reports</Text>
            <Text style={styles.subTitle}>Top five countries</Text>
            <View style={styles.listContainer}>
              <FlatList
                data={covidData}
                renderItem={renderItem}
                keyExtractor={eachCountry => eachCountry.id}
                showsVerticalScrollIndicator={false}
                ref={ref}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              />
            </View>
          </View>
        ) : (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color={colors.primaryColor} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
