import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LaunchImage from '../../assets/images/launchImg.svg';

import {styles} from './launchPage-styles';

const LaunchPage = () => {
  return (
    <SafeAreaView style={styles.launchPage}>
      <View style={styles.brandContainer}>
        <LaunchImage />
        <Text style={styles.brandName}>COVSTATS</Text>
      </View>
      <Text style={styles.footer}>
        © Copyright COVSTATS 2020. All rights reserved
      </Text>
    </SafeAreaView>
  );
};

export default LaunchPage;
