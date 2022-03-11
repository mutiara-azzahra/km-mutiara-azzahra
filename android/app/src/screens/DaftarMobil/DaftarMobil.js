import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';

export default function DaftarMobil() {
  return (
    <View style={styles.all}>
      <Text style={styles.text}>Daftar Mobil</Text>

      <ScrollView>
        <View>
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
          </View>
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
  },
  text: {
    color: 'black',
    marginBottom: 30,
  },
  daftarMobilPilihan: {
    paddingTop: 30,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  listMobil: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailMobil: {
    paddingLeft: 20,
  },
  iconMobil: {
    justifyContent: 'center',
  },
  detailDalamMobil: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logoIconDetail: {
    width: 17,
    height: 17,
  },
  innerText: {
    paddingLeft: 5,
    paddingRight: 15,
  },
});
