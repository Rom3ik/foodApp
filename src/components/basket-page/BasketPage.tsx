import React from 'react';
import {foodStore} from '../../store/store';
import {
  FlatList,
  Image,
  Pressable,
  TouchableHighlight,
  View,
} from 'react-native';
import {Text} from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Observer} from 'mobx-react-lite';
import {styles} from './styles';

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
                <Pressable onPress={() => foodStore.decreaseFood(item)}>
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
                </Pressable>
                <Text style={{paddingHorizontal: 12}}>{item.count}</Text>
                <Pressable onPress={() => foodStore.increaseFoodCount(item)}>
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
                </Pressable>
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

export default BasketPage;
