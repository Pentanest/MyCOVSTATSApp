import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {colorSetter} from '../../utils/progressColorSetter';

import colors from '../../theme/colors';

export const CircularProgess = props => {
  const {affected, recovered, id} = props;
  const myValue = Number(((affected - recovered) / recovered) * 100);

  return (
    <CircularProgress
      value={Math.trunc(myValue)}
      progressValueColor={colors.black}
      valueSuffix={'%'}
      progressValueStyle={{fontSize: 12}}
      radius={43}
      activeStrokeWidth={10}
      inActiveStrokeWidth={10}
      inActiveStrokeColor={colors.gray}
      activeStrokeColor={colorSetter(id)}
    />
  );
};
