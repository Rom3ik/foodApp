import React from 'react';
import {Image, Pressable, SafeAreaView, View} from 'react-native';
import {Text} from '@rneui/base';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  const goToMain = () => {
    navigation.navigate('Tabs' as never);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/imgs/mc-logo.png')}
        />

        <Image
          style={styles.image}
          source={require('../../../assets/imgs/ronald.png')}
        />
        <View style={styles.bottomContent}>
          <Text style={styles.title}>Are you hungry?</Text>
          <Text style={styles.contentText}>
            Ronald McDonald will deliver you a paradise for the palate
          </Text>
          <View>
            <Pressable
              onPress={goToMain}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#484848' : '#2c2a2c',
                },
                styles.nextButton,
              ]}>
              <Text style={styles.buttonText}>Let's order a meal</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
