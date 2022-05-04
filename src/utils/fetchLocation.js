import {Alert} from 'react-native';
import GetLocation from 'react-native-get-location';

export const fetchLocation = () => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      Alert.alert(
        `Latitude: ${location.latitude}\nLongitude: ${location.longitude}`,
      );
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
    });
};
