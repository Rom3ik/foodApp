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
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(243,243,243)' : 'white',
              },
              {
                width: '48%',
                borderRadius: 30,
                marginBottom: 20,
                height: 230,
                position: 'relative',
                margin: 0,
                justifyContent: 'center',
                shadowColor: '#f1f7f7',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.7,
                shadowRadius: 2,
                elevation: 7,
              },
            ]}
            onPress={() => navigateToFood(pop)}>
            <View style={{alignItems: 'center', position: 'relative'}}>
              <Image
                style={{width: 120, height: 120, marginBottom: 0}}
                source={{uri: pop.image}}
              />
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#000',
                  paddingBottom: 10,
                }}>
                {pop.name}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  paddingLeft: 10,
                  paddingRight: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    fontWeight: '400',
                    color: '#000',
                  }}>
                  $ {pop.price}
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(179,255,163,0.34)',
                    borderRadius: 10,
                  }}>
                  <Icon name="shopping-cart" size={20} color="#07C619" />
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Popular;
