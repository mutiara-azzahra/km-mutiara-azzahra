import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async () => {
    try {
      const body = {
        email: email,
        password: password,
      };

      const res = await axios.post(`${BASE_URL}/login`, body);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <View
        style={{
          width: 300,
          justifyContent: 'center',
        }}>
        <Input
          placeholder="username"
          onChangeText={text => {
            setUsername(text);
          }}
        />
        <Input
          placeholder="password"
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>

      <Button
        style={{alignItems: 'center'}}
        title="Log in"
        loading={false}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{fontWeight: 'bold', fontSize: 12}}
        containerStyle={{
          marginHorizontal: 30,
          height: 40,
          width: 150,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('Movie')}
      />

      <View style={{alignItems: 'center'}}>
        <Text>Have no account?</Text>
        <TouchableOpacity>
          <Text
            style={{color: 'rgba(111, 202, 186, 1)'}}
            onPress={() => navigation.navigate('Register')}>
            Sign in here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 200,
  },
});
