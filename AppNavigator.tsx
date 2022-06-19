import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ItemInfo from './src/components/item-info/ItemInfo';
import Home from './src/components/Home/Home';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Settings from './src/components/Settings/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './src/components/header/Header';
import BasketPage from './src/components/basket-page/BasketPage';
import Favorite from './src/components/favorite/Favorite';
const Tab = createBottomTabNavigator();
const {Navigator, Screen} = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{backgroundColor: '#f8f6f6'}}
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
        tabBarStyle: {paddingBottom: 5},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({}) => {
            return (
              <View>
                <Icon name="home" size={20} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => {
            return (
              <View>
                <Icon name="search" size={20} />
              </View>
            );
          },
        }}
        name="Search"
        component={Settings}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => {
            return (
              <View>
                <Icon name="heart" size={20} />
              </View>
            );
          },
        }}
        name="Favorite"
        component={Favorite}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => {
            return (
              <View>
                <Icon name="user" size={20} />
              </View>
            );
          },
        }}
        name="Account"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName="Tabs">
        <Screen name="Tabs" component={Tabs} />
        <Screen
          name="Favorite"
          component={Favorite}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Favorite',
            headerTitleStyle: {fontWeight: 'bold', fontFamily: 'YanoneKaffee'},
            headerShown: true,
            headerStyle: {
              backgroundColor: 'transparent',
              shadowOpacity: 0,
              elevation: 0,
            },
          }}
        />
        <Screen name="ItemInfo" component={ItemInfo} />
        <Screen
          name="Basket"
          component={BasketPage}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Your order',
            headerTitleStyle: {fontWeight: 'bold', fontFamily: 'YanoneKaffee'},
            headerShown: true,
            headerStyle: {
              backgroundColor: 'transparent',
              shadowOpacity: 0,
              elevation: 0,
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
