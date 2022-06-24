import React from 'react';
import {foodStore} from '../../store/store';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {Text} from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
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
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <FlatList
            style={styles.listStyle}
            data={foodStore.foodList}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
          {foodStore.foodList.length ? (
            <View style={styles.footer}>
              <View style={styles.footerItem}>
                <Text>Items</Text>
                <Text>{foodStore.totalOrderSum}</Text>
              </View>
              <View style={styles.footerItem}>
                <Text>Delivery</Text>
                <Text>0</Text>
              </View>
              <View style={styles.footerItem}>
                <Text>Total cost</Text>
                <Text>{foodStore.totalOrderSum}</Text>
              </View>
              <TouchableHighlight
                style={styles.paymentButton}
                onPress={() => {}}
                underlayColor={'#fde87e'}>
                <View style={styles.paymentButtonWrapper}>
                  <Text style={styles.buttonText}>Go to payment</Text>
                  <Icon
                    style={styles.paymentIcon}
                    name="arrow-right"
                    size={15}
                  />
                </View>
              </TouchableHighlight>
            </View>
          ) : null}
        </View>
      )}
    </Observer>
  );
};

export const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 30,
    marginTop: 60,
  },
  mainContainer: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  priceText: {
    color: '#000',
  },
  foodName: {
    color: '#000',
    fontFamily: 'YanoneKaffee',
    fontWeight: '700',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    width: '75%',
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
    justifyContent: 'space-between',
  },
  footer: {
    display: 'flex',
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
  },
  footerItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
    width: '100%',
  },
  paymentButton: {
    borderRadius: 10,
    backgroundColor: 'gold',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  paymentButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  paymentIcon: {
    position: 'absolute',
    right: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BasketPage;
