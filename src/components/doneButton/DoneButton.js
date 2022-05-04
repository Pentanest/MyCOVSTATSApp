import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const DoneButton = ({...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={{marginRight: '10%'}}>Finish</Text>
    </TouchableOpacity>
  );
};

export default DoneButton;
