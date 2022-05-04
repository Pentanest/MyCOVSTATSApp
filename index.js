/**
 * @format
 */

import React, {useState} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LaunchPage from './src/screens/launchPage/LaunchPage';

const useMyApp = () => {
  const [showApp, setShowApp] = useState(false);
  setTimeout(() => {
    setShowApp(true);
  }, 3000);
  return showApp ? <App /> : <LaunchPage />;
};

AppRegistry.registerComponent(appName, () => useMyApp);
