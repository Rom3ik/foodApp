import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

const Profile = () => {
  return (
    <SafeAreaView>
      <View>
        <View
          style={styles.mainContainer}>
          <View style={styles.infoContainer}>
            <Avatar
              rounded={true}
              avatarStyle={{
                borderColor: '#efefef',
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../../../assets/imgs/ronald.png')}
              size={75}
            />
            <View style={styles.userInfo}>
              <Text style={styles.name}>Username</Text>
              <Text style={styles.email}>useremail@gmail.com</Text>
            </View>
          </View>
          <View style={styles.listItem}>
            <View style={styles.section}>
              <IonIcon
                style={{marginRight: 15}}
                name="clipboard-outline"
                size={25}
                color={'#000'}
              />
              <Text style={styles.sectionTitle}>My Orders</Text>
            </View>
            <IonIcon name="chevron-forward" size={25} color={'#000'} />
          </View>
          <View style={styles.listItem}>
            <View style={styles.section}>
              <IonIcon
                style={{marginRight: 15}}
                name="person-outline"
                size={25}
                color={'#000'}
              />
              <Text style={styles.sectionTitle}>My Profile</Text>
            </View>
            <IonIcon name="chevron-forward" size={25} color={'#000'} />
          </View>
          <View style={styles.listItem}>
            <View style={styles.section}>
              <SimpleIcons
                style={{marginRight: 15}}
                name="location-pin"
                size={25}
                color={'#000'}
              />
              <Text style={styles.sectionTitle}>My Location</Text>
            </View>
            <IonIcon name="chevron-forward" size={25} color={'#000'} />
          </View>
          <View style={styles.listItem}>
            <View style={styles.section}>
              <OcticonIcon
                style={{marginRight: 15}}
                name="credit-card"
                size={25}
                color={'#000'}
              />
              <Text style={styles.sectionTitle}>Payments Methods</Text>
            </View>
            <IonIcon name="chevron-forward" size={25} color={'#000'} />
          </View>
          <View style={styles.listItem}>
            <View style={styles.section}>
              <MaterialCommunityIcon
                style={{marginRight: 15}}
                name="ticket-percent-outline"
                size={25}
                color={'#000'}
              />
              <Text style={styles.sectionTitle}>My Vouchers</Text>
            </View>
            <IonIcon name="chevron-forward" size={25} color={'#000'} />
          </View>
          <View style={styles.listItem}>
            <View style={styles.section}>
              <SimpleIcons
                style={{marginRight: 15}}
                name="bubbles"
                size={25}
                color={'#000'}
              />
              <Text style={styles.sectionTitle}>Contact Us</Text>
            </View>
            <IonIcon name="chevron-forward" size={25} color={'#000'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
