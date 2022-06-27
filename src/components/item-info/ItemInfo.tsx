import React, {useMemo, useRef, useState} from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {foodStore} from '../../store/store';

import BottomSheet, {
  BottomSheetFooter,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Basket from '../basket/Basket';
import FavoriteButton from '../favoriteButton/FavoriteButton';
import {favoriteStore} from '../../store/favorite-store';

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
  const snapPoints = useMemo(() => ['55%', '55%', '90%'], []);
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<ItemParams>>();
  const BottomSheetBackground = ({style}: any) => {
    return (
      <View
        style={[
          {
            backgroundColor: '#ffffff',
            borderRadius: 25,
          },
          {...style},
        ]}
      />
    );
  };
  const [foodCount, setFoodCount] = useState(1);
  const [basketValue, setBasketValue] = useState(0);
  const addToCard = () => {
    setBasketValue(basketValue + 1);
    foodStore.addFood({
      name: params.item.name,
      id: params.item.id,
      image: params.item.image,
      price: params.item.price,
      count: foodCount,
    });
  };
  const decreaseFood = () => {
    if (foodCount === 1) {
      return false;
    } else {
      setFoodCount(foodCount - 1);
    }
  };
  const [favoriteIndex, setFavorite] = useState<boolean>(false);
  const setFavoriteClick = () => {
    setFavorite(prevState => !prevState);
  };
  const increaseFood = () => setFoodCount(prev => prev + 1);
  const addToFavorite = () => {
    favoriteStore.addToFavorite(params?.item);
    setFavoriteClick();
  };

  const renderFooter = (props: any) => (
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
              width: 120,
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
              <Pressable
                onPress={decreaseFood}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgb(243,243,243)' : 'white',
                  },
                  {
                    width: 30,
                    height: 40,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Icon2 name="minus" size={15} />
              </Pressable>
              <Text style={{fontWeight: 'bold'}}>{foodCount}</Text>
              <Pressable
                onPress={increaseFood}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgb(243,243,243)' : 'white',
                  },
                  {
                    width: 30,
                    height: 40,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Icon2 name="plus" size={15} />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{flex: 2}}>
          <Pressable
            onPress={addToCard}
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
  );
  return (
    <SafeAreaView style={{backgroundColor: 'transparent', flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Pressable
          onPress={() => {
            navigation.goBack();
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
        <View style={{flexDirection: 'row', marginRight: 15, marginTop: 15}}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 40,
              height: 40,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
            <FavoriteButton
              color={
                favoriteStore.activeStatus(params.item.id) ? 'red' : 'grey'
              }
              addToFavorite={addToFavorite}
            />
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              width: 40,
              height: 40,
              borderRadius: 12,
              marginLeft: 15,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
            <Basket />
          </View>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 0}}>
        <Image
          source={{uri: params.item.image}}
          style={{
            width: '100%',
            height: '60%',
            resizeMode: 'stretch',
            zIndex: -1,
            top: -70,
            bottom: 0,
            display: 'flex',
            alignSelf: 'flex-start',
          }}
        />
      </View>
      <BottomSheet
        backgroundComponent={props => <BottomSheetBackground {...props} />}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
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
              $ {params?.item.price}
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
              {params?.item.weight && (
                <>
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
                </>
              )}
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};
export default ItemInfo;
