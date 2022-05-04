import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {fetchLocation} from '../../utils/fetchLocation';

import UserImage from '../../assets/images/48.svg';

import {styles} from './customDrawer-styles.js';

const CustomDrawer = props => {
  return (
    <View style={styles.wholeDrawer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.mainContainer}>
        <View style={styles.userImg}>
          <UserImage style={styles.avatar} />
        </View>

        <Text style={styles.userName}>Rachel Brown</Text>
        <View style={styles.userLevel}>
          <TouchableOpacity onPress={fetchLocation}>
            <Text style={styles.locationBtn}>Location</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.drawer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
