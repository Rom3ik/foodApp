import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Premiers from '../premiers/Premiers';
import Popular from "../popular/Popular";

const Home = () => {
  return (
    <ScrollView style={{height: '100%'}}>
      <SafeAreaView>
        <View>
          <Premiers />
          <Popular />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
