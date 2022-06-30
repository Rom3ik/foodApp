import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {favoriteStore} from '../../store/favorite-store';
import {Observer} from 'mobx-react-lite';
import {Text, Card} from '@rneui/themed';
import { IFood } from "../../interfaces/food";

export const Favorite = () => {
  const renderItem = ({item}: any) => (
    <View style={{padding: 40}}>
      <Card.Title>{item.name}</Card.Title>
      <View style={{position: 'relative', alignItems: 'center'}}>
        <Image
          style={{width: '100%', height: 100}}
          resizeMode="contain"
          source={{uri: item.strMealThumb}}
        />
        <Text>{item.strInstructions}</Text>
      </View>
    </View>
  );
  return (
    <Observer>
      {() => (
        <View>
          <FlatList
            data={favoriteStore.favoriteList}
            renderItem={renderItem}
            keyExtractor={item => item.idMeal}
          />
        </View>
      )}
    </Observer>
  );
};

export default Favorite;
