import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Categories from '../categories/Categories';
import Popular from '../popular/Popular';

const Home = () => {
  return (
    <ScrollView style={{height: '100%'}}>
      <SafeAreaView>
        <View style={{padding: 20}}>
          <Categories />
          <Popular />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
