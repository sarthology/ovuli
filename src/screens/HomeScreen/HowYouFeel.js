import React, { Component } from 'react';
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

export default class HowYouFeel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emoticons: [
        require('../../assets/images/Emoji/neutral.png'),
        require('../../assets/images/Emoji/happy.png'),
        require('../../assets/images/Emoji/cry.png'),
        require('../../assets/images/Emoji/fearful.png'),
        require('../../assets/images/Emoji/love_hearts.png'),
        require('../../assets/images/Emoji/tired_face.png'),
        require('../../assets/images/Emoji/unamused.png'),
        require('../../assets/images/Emoji/disappointed.png'),
      ],
    };
  }

  saveData = async item => {
    var emoList = [
      'neutral',
      'happy',
      'cry',
      'fearful',
      'love_hearts',
      'tired_face',
      'unamused',
      'disappointed',
    ];
    var emotion = emoList[item];
    const date = new Date();
    try {
      AsyncStorage.setItem('emotion', emotion);
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.setItem('timestamp', date.toISOString());
    } catch (error) {
      console.log(error);
    }
  };

  renderItem = img => {
    return <Image style={styles.image} source={img} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cycleText}>
          <Text
            style={[
              { fontFamily: 'PT-Sans', fontSize: 30, fontWeight: 'bold', alignSelf: 'center' },
            ]}
          >
            How are
          </Text>
          <Text style={{ fontFamily: 'PT-Sans', fontSize: 25, marginTop: 8, alignSelf: 'center' }}>
            {' '}
            you feeling?{' '}
          </Text>
        </View>
        <View style={styles.emoji}>
          <FlatList
            data={this.state.emoticons}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity id={index} onPress={() => this.saveData(index)}>
                {this.renderItem(item)}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignContent: 'center',
  },
  image: {
    height: 90,
    width: 90,
    marginRight: 20,
  },
  flatlist: {
    flex: 1,
  },
  emoji: {
    justifyContent: 'center',
    alignContent: 'center',
    width: Dimensions.get('window').width - 50,
    marginLeft: 20,
  },
  cycleText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
