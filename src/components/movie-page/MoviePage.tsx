import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const MoviePage = () => {
  const data = useRoute();
  console.log('data', data.params.movie);
  return (
    <View>
      <Image
        source={{uri: data.params.movie.posterUrl}}
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
      />
    </View>
  );
};

export default MoviePage;
