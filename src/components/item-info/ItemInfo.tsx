import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {foodStore} from '../../store/store';

import BottomSheet, {
  BottomSheetFooter,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Basket from '../basket/Basket';

type ItemParams = {
  itemParams: {
    item: {
      image: string;
      name: string;
      price: string;
      description: string;
      id: number;
      weight: number;
      size: string;
      prepareTime: string;
    };
  };
};

const ItemInfo = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '40%', '90%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<ItemParams>>();
  const BottomSheetBackground = ({style}) => {
    return (
      <View
        style={[
          {
            backgroundColor: 'white',
            borderRadius: 35,
          },
          {...style},
        ]}
      />
    );
  };
  const [foodCount, setFoodCount] = useState(1);
  const [basketValue, setBasketValue] = useState(0);
  const addToCard = () => {
    if (basketValue === 1 || foodCount === 0) {
      return false;
    }
    setBasketValue(basketValue + 1);
    foodStore.addFood({
      name: params.item.name,
      id: Math.random().toFixed(2),
      image: params.item.image,
      price: params.item.price,
      count: foodCount,
    });
  };
  const decreaseFood = () => {
    if (foodCount === 0) {
      return false;
    } else {
      setFoodCount(foodCount - 1);
    }
  };

  const renderFooter = useCallback(
    props => (
      <BottomSheetFooter {...props} bottomInset={0}>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 25,
            paddingRight: 25,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: 999999,
            backgroundColor: '#fff',
          }}>
          <View style={{flex: 1.5}}>
            <View
              style={{
                backgroundColor: '#e7e7e7',
                width: 90,
                borderRadius: 12,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  display: 'flex',
                  alignItems: 'center',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                }}>
                <TouchableHighlight
                  underlayColor={'white'}
                  onPress={() => decreaseFood()}
                  style={{
                    width: 25,
                    height: 35,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon2 name="minus" size={15} />
                </TouchableHighlight>
                <Text style={{fontWeight: 'bold'}}>{foodCount}</Text>
                <TouchableHighlight
                  underlayColor={'white'}
                  onPress={() => setFoodCount(foodCount + 1)}
                  style={{
                    width: 25,
                    height: 35,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon2 name="plus" size={15} />
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={{flex: 2}}>
            <Pressable
              onPress={() => addToCard()}
              style={{
                borderRadius: 12,
                backgroundColor: '#51D002',
                height: 50,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingHorizontal: 20,
              }}>
              <Icon name="shopping-cart" size={20} color="#fff" />
              <Text style={{fontSize: 15, color: '#fff'}}>Add to card</Text>
            </Pressable>
          </View>
        </View>
      </BottomSheetFooter>
    ),
    [foodCount],
  );
  return (
    <SafeAreaView style={{backgroundColor: '#ffef9f', flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home' as never);
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 40,
              height: 40,
              borderRadius: 12,
              margin: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="keyboard-arrow-left" size={30} />
          </View>
        </Pressable>
        <View
          style={{
            backgroundColor: '#fff',
            width: 40,
            height: 40,
            borderRadius: 12,
            margin: 15,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Basket />
        </View>
      </View>
      <View style={{flex: 1, marginTop: 0}}>
        <Image
          source={{uri: params.item.image}}
          style={{
            width: '100%',
            height: 300,
            display: 'flex',
            alignSelf: 'flex-start',
          }}
        />
      </View>
      <BottomSheet
        backgroundComponent={props => <BottomSheetBackground {...props} />}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        footerComponent={renderFooter}>
        <BottomSheetScrollView>
          <View style={{padding: 25}}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: 'YanoneKaffee',
                color: '#000',
                fontWeight: 'bold',
                paddingBottom: 10,
              }}>
              {params.item.name}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'YanoneKaffee',
                color: '#000',
                fontWeight: 'bold',
                paddingBottom: 10,
              }}>
              {params?.item.price}
            </Text>
            <Text style={{fontWeight: '300', color: '#000'}}>
              {params?.item.description}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 20,
                width: '100%',
              }}>
              <View>
                <Text style={{fontWeight: 'bold'}}>Size</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Icon name="height" size={20} color="#000" />
                  <Text style={{marginLeft: 5, color: '#000'}}>
                    {params?.item.size}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>Weight</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Icon2 name="weight-kilogram" size={20} color="#000" />
                  <Text style={{marginLeft: 5, color: '#000'}}>
                    {params?.item.weight} gramm
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>Prepare time</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Icon name="timer" size={20} color="#000" />
                  <Text style={{marginLeft: 5, color: '#000'}}>
                    {params?.item.prepareTime} min
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  fontWeight: '700',
                  fontFamily: 'YanoneKaffee',
                }}>
                Ingredients
              </Text>
              <View
                style={{
                  overflow: 'scroll',
                  flexDirection: 'row',
                  marginVertical: 15,
                  justifyContent: 'flex-start',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#ffffd9',
                    borderColor: '#ecd113',
                    borderStyle: 'solid',
                    borderWidth: 2,
                    marginRight: 15,
                    width: 40,
                    height: 40,
                  }}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../assets/imgs/garlic.png')}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#ffffd9',
                    borderColor: '#ecd113',
                    borderStyle: 'solid',
                    borderWidth: 2,
                    marginRight: 15,
                    width: 40,
                    height: 40,
                  }}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../assets/imgs/tomato.png')}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#ffffd9',
                    borderColor: '#ecd113',
                    borderStyle: 'solid',
                    borderWidth: 2,
                    marginRight: 15,
                    width: 40,
                    height: 40,
                  }}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../assets/imgs/cucumber.png')}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#ffffd9',
                    borderColor: '#ecd113',
                    borderStyle: 'solid',
                    borderWidth: 2,
                    marginRight: 15,
                    width: 40,
                    height: 40,
                  }}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../assets/imgs/chili-pepper.png')}
                  />
                </View>
              </View>
              <View />
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};
export default ItemInfo;
