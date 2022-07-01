import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {movieApiService} from '../../services/movie-api-service';
import {styles} from './styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Premiers = () => {
  const navigation = useNavigation();
  const navigateToMovie = (movie: any) => {
    navigation.navigate('MoviePage', {
      movie: movie,
    });
  };
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    movieApiService.getPremiersList(setIsLoading);
  }, [setIsLoading]);

  const renderMoviesSlider = ({item}: any) => {
    return (
      <View style={styles.movieContainer}>
        <Pressable onPress={() => navigateToMovie(item)}>
          <Image style={styles.moviePoster} source={{uri: item.posterUrl}} />
          <Text style={styles.movieName}>
            {item.nameRu ? item.nameRu : item.nameEn}
          </Text>
          <View style={styles.ratingSection}>
            <IonIcon name="ios-star-sharp" size={15} color={'#FFC319'} />
            <Text style={styles.ratingText}>
              {item.ratingImdb
                ? item.ratingImdb + '/10'
                : item.ratingKinopoisk + '/10'}{' '}
              IMdb
            </Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.sliderHeader}>
          <Text style={styles.sliderHeaderText}>Now Showing</Text>
          <View style={styles.seeMoreWrapper}>
            <Text style={styles.seeMore}>See more</Text>
          </View>
        </View>
        <FlatList
          horizontal={true}
          initialNumToRender={10}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item.kinopoiskId}
          data={movieApiService.movieList.slice(0, 10)}
          renderItem={renderMoviesSlider}
        />
      </View>
    </SafeAreaView>
  );
};

export default Premiers;
