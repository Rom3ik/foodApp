import React, {useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {categories} from './categories-list';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  const goToCategoryList = (index: number, list: any, name?: string) => {
    navigation.navigate(
      'CategoryList' as never,
      {
        list: list,
        categoryName: name,
      } as never,
    );
  };
  return (
    <View style={{paddingTop: 30}}>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontFamily: 'YanoneKaffee',
          fontWeight: 'bold',
        }}>
        Categories
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'scroll',
          }}>
          {categories.map((cat, index) => (
            <Pressable
              key={cat.id}
              removeClippedSubviews={true}
              style={{
                width: 90,
                marginHorizontal: 5,
                borderRadius: 8,
                shadowColor: '#f1f7f7',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.7,
                shadowRadius: 2,
                elevation: 7,
                backgroundColor: '#FFFFFF',
                marginBottom: 20,
                height: 90,
                justifyContent: 'center',
              }}
              onPress={() => {
                goToCategoryList(index, cat.list, cat.name);
              }}>
              <View style={{alignItems: 'center'}}>
                <Image style={{width: 30, height: 30}} source={cat.image} />
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
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
