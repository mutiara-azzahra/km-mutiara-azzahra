import React from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';

export default function DaftarMobil(props) {
  return (
    <View style={styles.all}>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.text}>Hi, Nama</Text>
            <Text style={styles.textLocation}>Your Location</Text>
          </View>
          <View></View>
        </View>

        <View style={styles.container}>
          <View style={styles.dalamContainer}>
            <Text style={styles.textContainer}>
              Sewa Mobil Berkualitas di kawasanmu
            </Text>
            <Button
              style={styles.button}
              title="Sewa mobil"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.mobilContainer}>
            <Image source={require('../../img/mobil-home.png')} />
          </View>
        </View>

        <View style={styles.smallBox}>
          <View style={styles.box}>
            <View style={styles.kotakIcon}>
              <Image
                style={styles.logoIcon}
                source={require('../../img/fi_truck.png')}></Image>
            </View>
            <Text>Sewa Mobil</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.kotakIcon}>
              <Image
                style={styles.logoIcon}
                source={require('../../img/fi_box.png')}></Image>
            </View>
            <Text>Oleh-Oleh</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.kotakIcon}>
              <Image
                style={styles.logoIcon}
                source={require('../../img/fi_key.png')}></Image>
            </View>
            <Text>Penginapan</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.kotakIcon}>
              <Image
                style={styles.logoIcon}
                source={require('../../img/fi_camera.png')}></Image>
            </View>
            <Text>Wisata</Text>
          </View>
        </View>

        <View>
          <Text style={styles.daftarMobilPilihan}>Daftar Mobil Pilihan</Text>

          <View style={styles.allListMobil}>
            <View style={styles.listMobil}>
              <Image
                style={styles.iconMobil}
                source={require('../../img/list-mobil.png')}></Image>
              <View style={styles.detailMobil}>
                <Text>Daihatsu Xenia</Text>
                <View style={styles.detailDalamMobil}>
                  <Image
                    style={styles.logoIconDetail}
                    source={require('../../img/fi_users.png')}></Image>
                  <Text style={styles.innerText}>4</Text>
                  <Image
                    style={styles.logoIconDetail}
                    source={require('../../img/fi_briefcase.png')}></Image>
                  <Text style={styles.innerText}>2</Text>
                </View>
                <Text>Rp. 230.000,-</Text>
              </View>
            </View>
            <View style={styles.listMobil}>
              <Image
                style={styles.iconMobil}
                source={require('../../img/list-mobil.png')}></Image>
              <View style={styles.detailMobil}>
                <Text>Daihatsu Xenia</Text>
                <View style={styles.detailDalamMobil}>
                  <Image
                    style={styles.logoIconDetail}
                    source={require('../../img/fi_users.png')}></Image>
                  <Text style={styles.innerText}>4</Text>
                  <Image
                    style={styles.logoIconDetail}
                    source={require('../../img/fi_briefcase.png')}></Image>
                  <Text style={styles.innerText}>2</Text>
                </View>
                <Text>Rp. 230.000,-</Text>
              </View>
            </View>
            <View style={styles.listMobil}>
              <Image
                style={styles.iconMobil}
                source={require('../../img/list-mobil.png')}></Image>
              <View style={styles.detailMobil}>
                <Text>Daihatsu Xenia</Text>
                <View style={styles.detailDalamMobil}>
                  <Image
                    style={styles.logoIconDetail}
                    source={require('../../img/fi_users.png')}></Image>
                  <Text style={styles.innerText}>4</Text>
                  <Image
                    style={styles.logoIconDetail}
                    source={require('../../img/fi_briefcase.png')}></Image>
                  <Text style={styles.innerText}>2</Text>
                </View>
                <Text>Rp. 230.000,-</Text>
              </View>
            </View>
            <View style={styles.listMobil}>
              <Image
                style={styles.iconMobil}
                source={require('../../img/list-mobil.png')}></Image>
              <View style={styles.detailMobil}>
                <Text>Daihatsu Xenia</Text>
                <View style={styles.detailDalamMobil}>
                  <Image
                    style={styles.logoIconDetail}
                    source={require('../../img/fi_users.png')}></Image>
                  <Text style={styles.innerText}>4</Text>
                  <Image
                    style={styles.logoIconDetail}
                    source={require('../../img/fi_briefcase.png')}></Image>
                  <Text style={styles.innerText}>2</Text>
                </View>
                <Text>Rp. 230.000,-</Text>
              </View>
            </View>
            <View style={styles.listMobil}>
              <Image
                style={styles.iconMobil}
                source={require('../../img/list-mobil.png')}></Image>
              <View style={styles.detailMobil}>
                <Text>Daihatsu Xenia</Text>
                <Text>Rp. 230.000,-</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    padding: 20,
    flex: 1,
    backgroundColor: '#D3D9FD',
  },
  text: {
    paddingBottom: 5,
  },
  innerText: {
    paddingLeft: 5,
    paddingRight: 15,
  },
  textLocation: {
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  textContainer: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    backgroundColor: '#091B6F',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  button: {
    width: 10,
  },
  detailDalamMobil: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dalamContainer: {
    width: 155,
  },
  mobilContainer: {
    paddingTop: 30,
    paddingRight: 5,
  },
  kotakIcon: {
    height: 60,
    width: 60,
    marginBottom: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEF1DF',
  },
  smallBox: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  daftarMobilPilihan: {
    paddingTop: 30,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  iconMobil: {
    justifyContent: 'center',
  },
  logoIcon: {
    width: 30,
    height: 30,
  },
  logoIconDetail: {
    width: 17,
    height: 17,
  },
  listMobil: {
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailMobil: {
    paddingLeft: 20,
  },
});
