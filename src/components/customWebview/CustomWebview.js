import React from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import colors from '../../theme/colors';

const WebviewScreen = ({url}) => {
  const IndicatorLoadingView = () => {
    return (
      <ActivityIndicator
        size="large"
        color="#FF647C"
        style={{height: '100%', width: '100%', zIndex: 9}}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <WebView
        source={{
          uri: url,
        }}
        renderLoading={IndicatorLoadingView}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

export default WebviewScreen;
