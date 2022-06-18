import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {popular} from './popular-list';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Popular: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 30}}>
      <Text
        style={{
          width: 150,
          fontSize: 24,
          color: '#000',
          fontWeight: 'bold',
          fontFamily: 'YanoneKaffee',
        }}>
        Popular
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
          <TouchableHighlight
            key={pop.id}
            underlayColor={'transparent'}
            style={{
              width: '48%',
              borderRadius: 30,
              backgroundColor: '#ffffff',
              marginBottom: 20,
              height: 220,
              position: 'relative',
              margin: 0,
              justifyContent: 'center',
              shadowColor: '#f1f7f7',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.7,
              shadowRadius: 2,
              elevation: 7,
            }}
            onPress={() => {
              navigation.navigate(
                'ItemInfo' as never,
                {
                  item: pop,
                } as never,
              );
            }}>
            <View style={{alignItems: 'center', position: 'relative'}}>
              <Image
                style={{width: 90, height: 90, marginBottom: 20}}
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
                  {pop.price}
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
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

export default Popular;
