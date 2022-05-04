import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TabNavigator from '../drawer/tabNavigator/TabNavigator';
import Map from '../screens/map/Map';
import Education from '../screens/education/Education';
import Discovery from '../screens/discovery/Discovery';
import News from '../screens/news/News';
import colors from '../theme/colors';

const ROUTES = [
  {
    id: 1,
    name: 'Home',
    component: TabNavigator,
    icon: <Ionicons name="home-outline" color={colors.black} size={24} />,
    isHeaderShown: false,
  },
  {
    id: 2,
    name: 'Map',
    component: Map,
    icon: <Ionicons name="map" color={colors.black} size={24} />,
    isHeaderShown: true,
  },
  {
    id: 3,
    name: 'Education',
    component: Education,
    icon: <Ionicons name="person" color={colors.black} size={24} />,
    isHeaderShown: true,
  },
  {
    id: 4,
    name: 'Discovery',
    component: Discovery,
    icon: <Ionicons name="location-outline" color={colors.black} size={24} />,
    isHeaderShown: true,
  },
  {
    id: 5,
    name: 'News',
    component: News,
    icon: <Ionicons name="book" color={colors.black} size={24} />,
    isHeaderShown: true,
  },
];

export {ROUTES};
