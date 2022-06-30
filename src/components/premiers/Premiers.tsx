import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {movieApiService} from '../../services/movie-api-service';
import {styles} from './styles';

const Premiers = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    movieApiService.getPremiersList(setIsLoading);
  }, [setIsLoading]);

  return (
    <SafeAreaView>
      <View>
        <Text style={{paddingHorizontal: 20}}>Now Showing</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {movieApiService.movieList.map((item: any) => (
              <View key={item.kinopoiskId} style={styles.movieContainer}>
                <Image
                  style={styles.moviePoster}
                  source={{uri: item.posterUrl}}
                />
                <Text>{item.nameRu ? item.nameRu : item.nameEn}</Text>
                <Text>{item.ratingKinopoisk}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Premiers;
