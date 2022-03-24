import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screen
import Login 

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
}
