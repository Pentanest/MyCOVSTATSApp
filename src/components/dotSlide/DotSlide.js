import React from 'react';
import {View} from 'react-native';
import colors from '../../theme/colors';

const DotSlide = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? colors.primaryColor : colors.gray;
  return (
    <View
      style={{
        width: 8,
        height: 8,
        marginHorizontal: 10,
        borderRadius: 4,
        backgroundColor,
      }}
    />
  );
};

export default DotSlide;
