import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Premiers from '../premiers/Premiers';

const Home = () => {
  return (
    <ScrollView style={{height: '100%'}}>
      <SafeAreaView>
        <View>
          <Premiers />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
