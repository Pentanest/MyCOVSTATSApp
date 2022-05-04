import React from 'react';
import {View, Text} from 'react-native';

import MapImg from '../../assets/images/map-img.svg';
import colors from '../../theme/colors';

import {styles} from './mapBox-styles';

const MapBox = () => {
  return (
    <View style={styles.upperBox}>
      <View style={{marginBottom: '5%'}}>
        <Text style={{fontWeight: '600', marginBottom: '5%'}}>
          COVID-19 Affected Areas
        </Text>
        <View style={styles.variantBox}>
          <View style={styles.dataContainer}>
            <View style={[styles.variant, styles.color1]} />
            <Text style={styles.variantText}>Most Affected</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.variant, styles.color2]} />
            <Text style={styles.variantText}>Less Affected</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.3,
          borderColor: colors.textGray,
          borderRadius: 10,
        }}>
        <MapImg />
      </View>
    </View>
  );
};

export default MapBox;
