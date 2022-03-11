import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Login(props) {
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}></TouchableOpacity>
      <Text>Navigate ke Login</Text>
    </View>
  );
}
