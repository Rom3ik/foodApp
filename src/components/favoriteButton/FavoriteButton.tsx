import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FavoriteButton = (props: any) => {
  return (
    <Pressable onPress={() => props.addToFavorite()}>
      <View>
        <Icon name={'heart'} color={props.color} size={20} />
      </View>
    </Pressable>
  );
};

export default FavoriteButton;
