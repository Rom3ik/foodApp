import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {movieApiService} from '../../services/movie-api-service';
import {Badge} from '@rneui/base';
import OcticonIcon from 'react-native-vector-icons/Octicons';

const Popular = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    movieApiService.getPopularList(setIsLoading);
  }, [setIsLoading]);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.sliderHeader}>
          <Text style={styles.sliderHeaderText}>Popular</Text>
          <View style={styles.seeMoreWrapper}>
            <Text style={styles.seeMore}>See more</Text>
          </View>
        </View>
        {movieApiService.popularList.slice(0, 5).map((item: any) => (
          <View style={styles.movieContainer} key={item.kinopoiskId}>
            <Image style={styles.moviePoster} source={{uri: item.posterUrl}} />
            <View>
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
              <View style={{flexDirection: 'row'}}>
                {item.genres.map((genres: any) => (
                  <Badge
                    textStyle={styles.badgeText}
                    badgeStyle={styles.badgeStyle}
                    key={genres.genre}
                    value={genres.genre}
                  />
                ))}
              </View>
              <View style={{flexDirection: 'row', width: '100%'}}>
                {item.countries.map((countries: any, index: number) => (
                  <View key={countries.country}>
                    <Text>{(index ? ', ' : '') + countries.country}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Popular;
