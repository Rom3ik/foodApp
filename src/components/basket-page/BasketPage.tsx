import React from 'react';
import {foodStore} from '../../store/store';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {Button, Text} from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Observer} from 'mobx-react-lite';

type FoodProp = {
  item: {
    id: number;
    name: string;
    image: string;
    count: number;
    price: number | string;
  };
};

const BasketPage = () => {
  const renderItem = ({item}: FoodProp) => (
    <View style={styles.mainContainer}>
      <View style={styles.listHeadContainer}>
        <View style={styles.listContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={styles.image} source={{uri: item.image}} />
            <View style={styles.column}>
              <Text style={styles.foodName}>{item.name}</Text>
              <View style={styles.counterContainer}>
                <TouchableHighlight underlayColor={'red'}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 30,
                      width: 20,
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      borderRadius: 6,
                      elevation: 1,
                    }}>
                    <Icon color={'#4de833'} name="minus" />
                  </View>
                </TouchableHighlight>
                <Text style={{paddingHorizontal: 12}}>{item.count}</Text>
                <TouchableHighlight>
                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 30,
                      width: 20,
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      borderRadius: 6,
                      elevation: 1,
                    }}>
                    <Icon color={'#4de833'} name="plus" />
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={styles.rightSection}>
            <Icon
              onPress={() => foodStore.deleteFood(item.id)}
              size={20}
              name="trash"
              color={'#c2c2c2'}
            />
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <Observer>
      {() => (
        <FlatList
          data={foodStore.foodList}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      )}
    </Observer>
  );
};

export const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    alignItems: 'center',
  },
  priceText: {
    color: '#000',
  },
  foodName: {
    color: '#000',
    fontFamily: 'YanoneKaffee',
    fontWeight: '700',
  },
  listHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    height: 60,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    height: 50,
  },
  counterButton: {
    height: 120,
    width: 25,
    margin: 0,
    padding: 0,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  trashIcon: {
    width: 40,
    height: 40,
  },
  rightSection: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: 60,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
});

export default BasketPage;
