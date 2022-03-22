import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieList from './src/screens/MovieList/MovieList';
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from './src/helpers/apiAccessToken';

export default function App() {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getListMovieLatest();
  }, []);
}

const getListMovieLatest = async () => {
  try {
    const result = axios.get(`${BaseUrl}/movie/popular`, {
      headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
    });

    console.log(result, 'result');
  } catch (error) {
    console.log(error);
  }

  const CardMovie = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: `${ImageUrl}${item.poster_path}`}}
          style={{height: 200}}
          resizeMode="contain"
        />
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>List Movies</Text>
      <View>
        <TouchableOpacity>
          <Text>Popular</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Top Rated</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Now Playing</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={getListMovieLatest}>
        <Text>Request Data</Text>

        <FlatList>
          data=[ListMovies] keyExtractor={(item, index) => index}
          renderItem={CardMovie}
        </FlatList>
      </TouchableOpacity>
    </View>
  );
};
