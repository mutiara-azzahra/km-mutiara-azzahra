import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

export default function Akun() {
  return (
    <View style={styles.all}>
      <Text style={styles.judul}>
        Akun
        {'\n'}
      </Text>
      <View style={styles.container}>
        <Image source={require('../../img/allura.png')} />
        <Text style={styles.text}>
          Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
          lebih mudah.
        </Text>
        <Button
          style={styles.button}
          title="REGISTER"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    padding: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  judul: {
    fontWeight: 'bold',
  },
  text: {
    display: 'flex',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
  },
  image: {
    paddingBottom: 10,
  },
  button: {
    width: 50,
  },
});
