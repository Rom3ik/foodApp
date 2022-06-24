import React from 'react';
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
import CategoryListPage from './src/components/category-list-page/CategoryListPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/components/welcome-page/welcome';
const Tab = createBottomTabNavigator();
const {Navigator, Screen} = createNativeStackNavigator();

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
          tabBarIcon: () => {
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
          tabBarIcon: () => {
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
          tabBarIcon: () => {
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
          tabBarIcon: () => {
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
      <Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerShadowVisible: false,
          headerTitleStyle: {fontWeight: 'bold', fontFamily: 'YanoneKaffee'},
          headerStyle: {
            backgroundColor: '#f1f1f1',
          },
        }}
        initialRouteName="Welcome">
        <Screen
          options={{headerShown: false}}
          name="Welcome"
          component={Welcome}
        />
        <Screen options={{headerShown: false}} name="Tabs" component={Tabs} />
        <Screen name="CategoryList" component={CategoryListPage} />
        <Screen name="Favorite" component={Favorite} />
        <Screen
          options={{headerShown: false}}
          name="ItemInfo"
          component={ItemInfo}
        />
        <Screen name="Basket" component={BasketPage} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
