import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screen
import Home from '../screens/Home/Home';
import DaftarMobil from '../screens/DaftarMobil/DaftarMobil';
import Akun from '../screens/Akun/Akun';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator styles={styles.tab} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Daftar Mobil" component={DaftarMobil} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {},
});
