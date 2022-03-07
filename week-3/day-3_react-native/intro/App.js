import {View, Text} from 'react-native';
import React from 'react';
import MainRoutes from '.src/routers/MainRoutes';

export default function MainRoutes() {
  return (
    <NavigationContainer>
      <MainRoutes></MainRoutes>
    </NavigationContainer>
  );
}

/*import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

//jsx
//state adalah data yang hanya bisa diakses oleh si component tersebut, terkecuali jika data tersebut dikirim via props
export default function App() {
  const [firstName, setFirstName] = useState('Mutiara A'); //useState itu triggerAwal
  const [age, setAge] = useState(20);

  if (firstName === 'Mutiara A') {
    return (
      <View>
        <Text>Ini render optional</Text>
        <TouchableOpacity onPress={() => setFirstName('selain Mutiara')}>
          <Text>Ganti Nama yg diatas</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      //scrollview
      <View>
        <Text>
          {' '}
          Hello my name is {firstName}, dan saya {age} tahun {''}
        </Text>

        <TouchableOpacity onPress={() => setFirstName('Cobalagi')}>
          <Text>Ganti Nama yg bawah</Text>
        </TouchableOpacity>
      </View>
    );
  } */

/*  const RenderSomeScreens = props => {
    return (
      <View>
        <Text> Nama: {props.nama}</Text>
        <Text> Umur: {props.umur}</Text>
        <Text> Umur: {props.asal}</Text>

        <Text>
          Hello my name is {firstName}, dan saya berumur {age}
        </Text>

        <TouchableOpacity onPress={() => setFirstName('Cobalagi')}>
          <Text>Ganti Nama</Text>
        </TouchableOpacity>
      </View>
    );
  };*/
//jsx ada render ulang, jadi harus pake useState

//render ulang jika ada perubahan pada props dan state
/*return (
    <View>
      <Text>Biodata</Text>

      <RenderSomeScreens nama="mutia" umur={20} asal="kalimantan selatan" />
      <RenderSomeScreens nama="nama2" umur={22} asal="kalimantan barat" />
      <RenderSomeScreens nama="nama3" umur={23} asal="kalimantan timur" />
    </View>
  );
}*/
