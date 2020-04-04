import React from 'react';
import {
  Text,
  View,
  AsyncStorage,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import neutral from '@/assets/images/Emoji/neutral.png';
import happy from '@/assets/images/Emoji/happy.png';
import cry from '@/assets/images/Emoji/cry.png';
import fearful from '@/assets/images/Emoji/fearful.png';
import love_hearts from '@/assets/images/Emoji/love_hearts.png';
import tired_face from '@/assets/images/Emoji/tired_face.png';
import unamused from '@/assets/images/Emoji/unamused.png';
import disappointed from '@/assets/images/Emoji/disappointed.png';

const HowYouFeel = () => {
  const emoticons = [neutral, happy, cry, fearful, love_hearts, tired_face, unamused, disappointed];

  saveData = async item => {
    const emotionList = [
      'neutral',
      'happy',
      'cry',
      'fearful',
      'love_hearts',
      'tired_face',
      'unamused',
      'disappointed',
    ];
    let emotion = emotionList[item];
    const date = new Date();
    try {
      AsyncStorage.setItem('emotion', emotion);
      AsyncStorage.setItem('timestamp', date.toISOString());
    } catch (error) {
      console.log('Error saving data', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cycleText}>
        <Text style={styles.textStyle_bold}>How are</Text>
        <Text style={styles.textStyle_normal}>you feeling?</Text>
      </View>
      <View style={styles.emoji}>
        <FlatList
          data={emoticons}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity id={index} onPress={() => saveData(index)}>
              <Image style={styles.image} source={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    height: 90,
    width: 90,
    marginRight: 20,
  },
  emoji: {
    justifyContent: 'center',
    alignContent: 'center',
    width: Dimensions.get('window').width - 50,
    marginLeft: 20,
    marginTop: 10,
  },
  cycleText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle_bold: {
    fontFamily: 'PT-Sans',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textStyle_normal: {
    fontFamily: 'PT-Sans',
    fontSize: 25,
    marginTop: 8,
    alignSelf: 'center',
    marginLeft: 10,
  },
});

export default HowYouFeel;
