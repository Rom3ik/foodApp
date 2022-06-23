import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from '@rneui/base';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type ItemParams = {
  data: {
    categoryName: string;
    list: [
      {
        name: string;
        image: string;
        price: number;
      },
    ];
  };
};
const numColumns: number = 3;

export const CategoryListPage = (props: any) => {
  const {params} = useRoute<RouteProp<ItemParams>>();
  const navigation = useNavigation();
  const headerTitle = params.categoryName;
  useEffect(() => {
    props.navigation.setOptions({
      title: headerTitle,
    });
  }, [headerTitle, props.navigation]);
  const navigateToItem = (item: ItemParams) => {
    navigation.navigate('ItemInfo' as never, {item} as never);
  };
  const formatData = (data: any, columns: number) => {
    const numberOfFullRows = Math.floor(data.length / columns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * columns;
    while (
      numberOfElementsLastRow !== columns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return data;
  };
  const renderData = ({item}: any) => {
    if (item.empty) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.container}>
        <Pressable onPress={() => navigateToItem(item)}>
          <View style={styles.listItem}>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>$ {item.price}</Text>
          </View>
        </Pressable>
      </View>
    );
  };
  return (
    <FlatList
      style={styles.wrapper}
      keyExtractor={item => item.name}
      data={formatData(params.list, numColumns)}
      numColumns={numColumns}
      renderItem={renderData}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginVertical: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
  listItem: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});

export default CategoryListPage;
