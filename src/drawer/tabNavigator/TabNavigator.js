import 'react-native-gesture-handler';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {TAB_ROUTES} from '../../constants/tabRoutes';
import colors from '../../theme/colors';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Map':
      iconName = 'map-outline';
      break;
    case 'Education':
      iconName = 'person-outline';
      break;
    case 'Discovery':
      iconName = 'location-outline';
      break;
    case 'News':
      iconName = 'book-outline';
      break;
    default:
      break;
  }

  return <Ionicons name={iconName} color={color} size={24} />;
};

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        tabBarActiveTintColor: colors.red,
      })}>
      {TAB_ROUTES.map(route => {
        return (
          <Tab.Screen
            key={route.id}
            name={route.name}
            component={route.component}
            options={{
              headerTitle: () => (
                <Text style={{fontWeight: '600', fontSize: 18}}>
                  {route.label}
                </Text>
              ),
              headerRight: () => (
                <TouchableOpacity>
                  <Ionicons
                    name="person"
                    size={24}
                    style={{marginRight: '10%'}}
                  />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity onPress={navigation.toggleDrawer}>
                  <Ionicons name="menu" size={24} style={{marginLeft: '10%'}} />
                </TouchableOpacity>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
