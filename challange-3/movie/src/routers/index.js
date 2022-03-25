import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Profile from '../screens/Profile/Profile';
import Movie from '../screens/Movie/Movie';
import Register from '../screens/Register/Register';
import MovieDetail from '../screens/MovieDetail/MovieDetail';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Movie" component={Movie} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
}
