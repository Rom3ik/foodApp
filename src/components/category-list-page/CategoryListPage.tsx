import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Text} from '@rneui/base';
import {RouteProp, useRoute} from '@react-navigation/native';

type ItemParams = {
  data: {
    categoryName: string;
    list: [
      {
        name: string;
        image: string;
      },
    ];
  };
};

export const CategoryListPage = (props: any) => {
  const {params} = useRoute<RouteProp<ItemParams>>();
  const headerTitle = params.categoryName;
  useEffect(() => {
    props.navigation.setOptions({
      title: headerTitle,
    });
  }, [headerTitle, props.navigation]);
  const renderData = ({item}: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.listItem}>
          <Image style={styles.image} source={{uri: item.image}} />
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      keyExtractor={item => item.name}
      data={params.list}
      renderItem={renderData}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 65,
    height: 65,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 10,
    paddingBottom: 20,
  },
});

export default CategoryListPage;
