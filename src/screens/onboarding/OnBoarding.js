import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DotSlide from '../../components/dotSlide/DotSlide';
import DoneButton from '../../components/doneButton/DoneButton';

import {carouselData} from '../../constants/carouselConstants';

import {styles} from './onBoarding-styles';

const OnBoarding = () => {
  const navigation = useNavigation();
  const skip = () => {
    navigation.replace('App');
  };
  const done = () => {
    AsyncStorage.setItem('alreadyLaunched', 'true');
    navigation.replace('App');
  };
  return (
    <Onboarding
      onDone={done}
      onSkip={skip}
      DotComponent={DotSlide}
      DoneButtonComponent={DoneButton}
      bottomBarHighlight={false}
      imageContainerStyles={styles.mainImage}
      titleStyles={styles.mainTitle}
      subTitleStyles={styles.subTitle}
      pages={carouselData}
    />
  );
};

export default OnBoarding;
