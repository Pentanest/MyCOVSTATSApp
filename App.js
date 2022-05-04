import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppDrawer from './src/drawer/appDrawer/AppDrawer';
import OnBoarding from './src/screens/onboarding/OnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

const App = () => {
  const [launched, setLaunched] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      setLaunched(value === null);
    });
  }, []);

  if (launched === null) {
    return null;
  } else if (launched === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            options={{headerShown: false}}
            name="OnBoarding"
            component={OnBoarding}
          />
          <Stack.Screen name="App" component={AppDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    );
  }
};

export default App;
