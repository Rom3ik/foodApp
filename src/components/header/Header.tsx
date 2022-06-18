import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import Basket from '../basket/Basket';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png',
          }}
        />
      </View>
      <View style={styles.cartIcon}>
        <Basket />
      </View>
    </View>
  );
};

export default Header;
