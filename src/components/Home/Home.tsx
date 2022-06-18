import React from 'react';
import {ScrollView, View} from 'react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Header from '../header/Header';
import Categories from '../categories/Categories';
import Popular from '../popular/Popular';

const Home = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ScrollView style={{height: '100%'}}>
        <View style={{padding: 20}}>
          <Categories />
          <Popular />
        </View>
      </ScrollView>
    </ApplicationProvider>
  );
};

export default Home;
