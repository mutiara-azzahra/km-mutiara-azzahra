import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from '../../helpers/apiAccessToken';
import Feather from 'react-native-vector-icons/Feather';

export default function Movie(props) {
  const [listMovieData, setListMovieData] = useState([]);
  const [listNumber, setListNumber] = useState([]);
  const [startData, setStartData] = useState(1);
  const [endData, setEndData] = useState(6);
  const [curentPage, setCurentPage] = useState(1);

  const getListMovieLatest = async page => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/popular?page=${page}`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });

      setListMovieData(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListMovieLatest('now_playing');
  }, []);

  useEffect(() => {
    renderListNumber();
  }, [listMovieData]);

  const CardMovie = ({item}) => {
    return (
      <View style={{flexDirection: 'row', padding: 15}}>
        <Image
          source={{uri: `${ImageUrl}${item.poster_path}`}}
          style={{height: 200, width: 150, borderRadius: 5}}
          resizeMode="cover"
        />
        <Text style={{padding: 15}}>{item.title}</Text>
      </View>
    );
  };

  if (!'results' in listMovieData) {
    return null;
  }

  const renderListNumber = () => {
    let renderer = [];

    for (let index = startData; index < endData; index++) {
      renderer.push({
        title: index,
        isActive: index === 1 ? true : false,
      });
    }

    setListNumber(renderer);
  };

  const FooterComponent = () => {
    return (
      <View flexDirection="row" justifyContent="center" flex={1}>
        <View flexDirection="row">
          <TouchableOpacity
            onPress={() => setCurentPage(1)}
            style={{marginRight: 2}}>
            <Feather name="chevrons-left" color={'#2094F6'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (curentPage > 1) {
                setCurentPage(prevState => prevState - 1);
              }
            }}>
            <Feather name="chevron-left" color={'#2094F6'} size={24} />
          </TouchableOpacity>
        </View>
        <View flexDirection="row">
          {listNumber.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setCurentPage(index + 1);
                }}
                key={item.title}
                style={{
                  backgroundColor: index === curentPage - 1 ? '#2094F6' : null,
                  marginRight:
                    parseInt(item.title) === renderListNumber.length ? 0 : 20,
                }}>
                <Text
                  style={{color: index === curentPage - 1 ? 'white' : '#666'}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View flexDirection="row">
          <TouchableOpacity
            onPress={() => {
              if (curentPage < 5) {
                setCurentPage(prevState => prevState + 1);
              }
            }}>
            <Feather name="chevron-right" color={'#2094F6'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCurentPage(5);
            }}
            style={{marginLeft: 2}}>
            <Feather name="chevrons-right" color={'#2094F6'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View flex={1}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          margin: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            getListMovieLatest('popular');
          }}
          style={{
            backgroundColor: '#E50914',
            padding: 10,
            width: 100,
            borderRadius: 15,
          }}>
          <Text style={{textAlign: 'center', color: '#f5f5f1'}}>Popular </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#E50914',
            padding: 10,
            width: 100,
            borderRadius: 15,
          }}
          onPress={() => {
            getListMovieLatest('top_rated');
          }}>
          <Text style={{textAlign: 'center', color: '#f5f5f1'}}>
            Top Rated{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#E50914',
            padding: 10,
            width: 100,
            borderRadius: 15,
          }}
          onPress={() => {
            getListMovieLatest('now_playing');
          }}>
          <Text style={{textAlign: 'center', color: '#f5f5f1'}}>
            Now Playing{''}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={listMovieData.results}
        keyExtractor={(item, index) => index}
        renderItem={CardMovie}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
}
