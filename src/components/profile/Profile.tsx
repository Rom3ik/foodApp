import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Avatar
            rounded={true}
            avatarStyle={{
              borderColor: '#cbcbcb',
              borderWidth: 1,
              borderRadius: 50,
            }}
            source={require('../../../assets/imgs/ronald.png')}
            size={80}
          />
          <View>
            <Text>Ramazan</Text>
            <Text>rom_3ik@bk.ru</Text>
          </View>
        </View>
        <View>
          <Text>History</Text>
          <View
            style={{
              backgroundColor: '#beeaff',
              borderRadius: 12,
              padding: 20,
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
              }}>
              <View style={{alignItems: 'center', marginRight: 25}}>
                <Text>Total orders</Text>
                <Text>12</Text>
              </View>
              <View style={{alignItems: 'center', marginRight: 25}}>
                <Text>Earned coins</Text>
                <Text>460</Text>
              </View>
              <View style={{alignItems: 'center', marginRight: 0}}>
                <Text>Basket count</Text>
                <Text>0</Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <Text>Profile</Text>
              <Icon name="person" size={25} color={'#000'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <Text>Notifications</Text>
              <Icon name="notifications-outline" size={25} color={'#000'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <Text>Language</Text>
              <Icon name="earth" size={25} color={'#000'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <Text>Payment Type</Text>
              <Icon name="ios-card" size={25} color={'#000'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <Text>Help</Text>
              <Icon name="information-circle" size={25} color={'#000'} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Profile;
