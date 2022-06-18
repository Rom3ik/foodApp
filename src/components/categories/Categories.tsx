import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {categories} from './categories-list';

const Categories = () => {
  const [active, setActive] = useState(null);
  return (
    <View style={{paddingTop: 30}}>
      <Text
        style={{
          width: 150,
          fontSize: 24,
          color: '#000',
          fontFamily: 'YanoneKaffee',
          fontWeight: 'bold',
        }}>
        Choose Your Best Meal
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {categories.map((cat, index) => (
          <TouchableHighlight
            key={cat.id}
            underlayColor={'transparent'}
            style={{
              width: '30%',
              borderRadius: 10,
              shadowColor: '#f1f7f7',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.7,
              shadowRadius: 2,
              elevation: 7,
              backgroundColor: active === index ? '#F8C20B' : '#FFFFFF',
              marginBottom: 20,
              height: 80,
              justifyContent: 'center',
            }}
            onPress={() => {
              setActive(index);
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30}}
                source={{uri: cat.image}}
              />
              <Text
                style={{
                  fontSize: 14,
                  textAlign: 'center',
                  fontFamily: 'YanoneKaffee',
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                {cat.name}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

export default Categories;
