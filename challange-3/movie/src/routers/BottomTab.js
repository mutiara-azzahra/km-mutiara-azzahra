import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screen
import Login from '../screens/Login';
import Movie from '../screens/Movie';
import Register from '../screens/Register';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator styles={styles.tab} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {},
});
