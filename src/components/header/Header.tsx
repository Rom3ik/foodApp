import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Basket from '../basket/Basket';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesignIcon name="appstore1" size={30} color={'#000'} />
        <View style={{paddingLeft: 10}}>
          <Text style={styles.deliverText}>Deliver to</Text>
          <Text style={styles.deliverToText}>Baku, 8 mkr</Text>
        </View>
      </View>
      <View>
        <Image
          style={styles.profileImage}
          source={require('../../../assets/imgs/avatar.png')}
        />
      </View>
      {/*<Image*/}
      {/*  style={styles.logo}*/}
      {/*  source={{*/}
      {/*    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png',*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<View style={styles.cartIcon}>*/}
      {/*  <Basket />*/}
      {/*</View>*/}
    </View>
  );
};

export default Header;
