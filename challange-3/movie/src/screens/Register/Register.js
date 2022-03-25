import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const postRegister = async () => {
    try {
      const body = {
        email: email,
        username: username,
        password: password,
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: phone,
      };
      const rest = await axios.post(`${BASE_URL}/users`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>

      <View style={{width: 300}}>
        <Input
          style={{height: 30}}
          placeholder="email"
          onChangeText={text => {
            setEmail(text);
          }}
        />

        <Input
          style={{height: 30}}
          placeholder="username"
          onChangeText={text => {
            setUsername(text);
          }}
        />

        <Input
          style={{height: 30}}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <Input
          style={{height: 30}}
          placeholder="firstname"
          onChangeText={text => {
            setFirstName(text);
          }}
        />
        <Input
          style={{height: 30}}
          placeholder="lastname"
          onChangeText={text => {
            setLastName(text);
          }}
        />
        <Input
          style={{height: 30}}
          placeholder="phone"
          keyboardType="phone-pad"
          onChangeText={text => {
            setPhone(text);
          }}
        />
      </View>

      <Button
        title="Register"
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
        onPress={postRegister}
      />

      <View style={{alignItems: 'center'}}>
        <Text>Already sign in?</Text>
        <TouchableOpacity>
          <Text
            style={{color: 'rgba(111, 202, 186, 1)'}}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
});
