import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Explore(props) {
  return (
    <View>
      <Text>Explore</Text>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Profile')}></TouchableOpacity>
      <Text>Navigate ke Profile</Text>
    </View>
  );
}
