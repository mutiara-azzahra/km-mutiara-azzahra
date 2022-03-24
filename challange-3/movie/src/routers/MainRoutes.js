import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screen
import Login from '../screens/Login';
import Movie from '../screens/Movie';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" components={Login} />
      <Stack.Screen name="Movie" components={Movie} />
      <Stack.Screen name="Register" components={Register} />
      <Stack.Screen name="Main" components={MainRoutes} />
    </Stack.Navigator>
  );
}
