import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
//screen

import BottomTab from './BottomTab';

export default function MainRoutes() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
