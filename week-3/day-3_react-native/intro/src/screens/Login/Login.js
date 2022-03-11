import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Register(props) {
  return (
    <View>
      <Text>Login</Text>

      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Register')
        }></TouchableOpacity>
      <Text>Navigate ke Profile</Text>
    </View>
  );
}
