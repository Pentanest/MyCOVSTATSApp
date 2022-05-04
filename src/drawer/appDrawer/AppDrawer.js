import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../customDrawer/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {ROUTES} from '../../constants/drawerRoutes';
import colors from '../../theme/colors';

const Drawer = createDrawerNavigator();

const handleRender = ({id, name, component, icon, isHeaderShown}) => {
  return (
    <Drawer.Screen
      key={id}
      name={name}
      component={component}
      options={{
        drawerIcon: () => icon,
        headerShown: isHeaderShown,
      }}
    />
  );
};

const AppDrawer = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      showsVerticalScrollIndicator={false}
      screenOptions={{
        drawerActiveBackgroundColor: colors.primaryColor,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.black,
        drawerLabelStyle: {marginLeft: -11, fontSize: 18},
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="person" size={24} style={{marginRight: '10%'}} />
          </TouchableOpacity>
        ),
        drawerType: 'front',
      }}>
      {ROUTES.map(handleRender)}
    </Drawer.Navigator>
  );
};

export default AppDrawer;
