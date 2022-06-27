import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {popular} from './popular-list';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Popular = () => {
  const navigation = useNavigation();
  const navigateToFood = (pop: {}) => {
    navigation.navigate(
      'ItemInfo' as never,
      {
        item: pop,
      } as never,
    );
  };
  return (
    <View style={{paddingTop: 20}}>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontWeight: 'bold',
          fontFamily: 'YanoneKaffee',
        }}>
        Most Popular
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {popular.map(pop => (
          <Pressable
            key={pop.id}
            style={{
              width: '48%',
              borderRadius: 8,
              marginBottom: 20,
              position: 'relative',
              margin: 0,
              backgroundColor: '#ffffff',
              justifyContent: 'space-between',
              shadowColor: '#f1f7f7',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.7,
              shadowRadius: 2,
              elevation: 7,
            }}
            onPress={() => navigateToFood(pop)}>
            <View
              style={{
                alignItems: 'center',
                padding: 10,
                height: 200,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: 120,
                  resizeMode: 'cover',
                  borderRadius: 8,
                }}
                source={{uri: pop.image}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    width: 80,
                    fontSize: 16,
                    textAlign: 'left',
                    flexDirection: 'row',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  {pop.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  $ {pop.price}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Popular;
