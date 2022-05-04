import React from 'react';
import OnBoard1 from '../assets/images/onboard1.svg';
import OnBoard2 from '../assets/images/onboard2.svg';
import OnBoard3 from '../assets/images/onboard3.svg';
import colors from '../theme/colors';

export const carouselData = [
  {
    backgroundColor: colors.white,
    image: <OnBoard1 />,
    title: 'Fever',
    subtitle:
      'He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic medical conditions.',
  },
  {
    backgroundColor: colors.white,
    image: <OnBoard2 />,
    title: 'Cough',
    subtitle:
      'Such as heart or lung disease or diabetis, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such influenza.',
  },
  {
    backgroundColor: colors.white,
    image: <OnBoard3 />,
    title: 'Breathing Difficulty',
    subtitle:
      'Contact your doctor or clinic right away if you have COVID-19 symptoms, you’ve been exposed to someone with COVID-19, or you live in or have traveled from an area with ongoing community spread of COVID-19.',
  },
];
