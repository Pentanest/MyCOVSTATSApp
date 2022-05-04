import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {CircularProgess} from '../../components/circularProgress/CircularProgess';
import MapBox from '../../components/mapBox/MapBox';
import BellButton from '../../components/bellButton/BellButton';

import {apiFetching} from '../../network/apiFetching';
import {valueShortener} from '../../utils/valueShortener';

import colors from '../../theme/colors';
import {styles} from './map-styles';

const Map = () => {
  const isFocused = useIsFocused();
  const [isFetched, setFetched] = useState(false);
  const [covidData, setCovidData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiFetching();
        setCovidData(data.slice(0, 3));
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

  const renderData = () =>
    covidData.map(item => (
      <View style={styles.dataBox}>
        <View style={styles.circularBorder} />
        <View style={styles.rectangleBorder}>
          <CircularProgess
            affected={item.affected}
            recovered={item.recovered}
            id={item.id}
          />
        </View>
        <View>
          <Text style={styles.countryText}>{item.country}</Text>
          <Text style={styles.affectedText}>
            Affected - {valueShortener(String(item.affected))}
          </Text>
          <Text style={styles.recoveredText}>
            Recovered - {valueShortener(String(item.recovered))}
          </Text>
        </View>
        <BellButton
          rate={((item.affected - item.recovered) / item.recovered) * 100}
        />
      </View>
    ));

  const renderFooterItem = () => {
    return (
      <View style={styles.lowerBox}>
        <Text style={styles.titleText}>Top Countries</Text>
        {renderData()}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.listContainer}>
      {isFetched ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <MapBox />
          {renderFooterItem()}
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" color={colors.primaryColor} />
      )}
    </SafeAreaView>
  );
};

export default Map;
