import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';

export default function () {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
}
