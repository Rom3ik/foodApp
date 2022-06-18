import React from 'react';
import {Pressable, View} from 'react-native';
import {Badge} from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {foodStore} from '../../store/store';
import {Observer} from 'mobx-react-lite';

const Basket = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Basket' as never)}>
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
        <Observer>
          {() => (
            <Badge
              value={foodStore.count}
              status="warning"
              badgeStyle={{position: 'absolute', left: 5, bottom: -5}}
            />
          )}
        </Observer>
        <Icon name="shopping-cart" size={20} />
      </View>
    </Pressable>
  );
};

export default Basket;
