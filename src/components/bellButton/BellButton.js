import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors';

const BellButton = props => {
  const [bellPress, setPress] = useState(false);

  const handlePress = () => {
    setPress(!bellPress);
  };
  return (
    <TouchableOpacity
      hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
      onPress={handlePress}>
      <Ionicons
        name={bellPress ? 'notifications' : 'notifications-outline'}
        color={props.rate > 10 ? colors.red : colors.green}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default BellButton;
