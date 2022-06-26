import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import Categories from '../categories/Categories';
import Popular from '../popular/Popular';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <ScrollView style={{height: '100%'}}>
      <SafeAreaView>
        <View style={{padding: 20}}>
          <Text
            style={{
              width: 200,
              fontSize: 24,
              color: '#000',
              fontFamily: 'YanoneKaffee',
              fontWeight: 'bold',
            }}>
            Find & Restaurant in Your City
          </Text>
          <View style={styles.searchBar}>
            <Icon
              style={styles.searchIcon}
              name="ios-search"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.searchInput}
              keyboardType={'default'}
              placeholder={'Search Food'}
            />
            <View style={styles.filterIcon}>
              <FeatherIcon name="sliders" size={20} color="#000" />
            </View>
          </View>
          <Categories />
          <Popular />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
