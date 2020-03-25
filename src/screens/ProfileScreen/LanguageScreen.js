import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WheelPicker } from 'react-native-wheel-picker-android';

import top from '../../../wireframes/assets/Lang_Screen/top.png';
import bottom from '../../../wireframes/assets/Lang_Screen/bottom.png';
import * as Font from 'expo-font';

const wheelPickerData = ['Hindi', 'Marathi', 'English', 'Telugu', 'Tulu', 'Tamil'];

export default class LanguageScreen extends Component {
  state = { selectedItem: 0 };

  componentDidMount() {
    Font.loadAsync({
      'PT-Sans': require('../../../wireframes/assets/fonts/PTC55F.ttf'),
    });
  }

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Image source={top} style={styles.top} />
        <View style={styles.cycleText}>
          <Text
            style={[
              { fontFamily: 'PT-Sans', fontSize: 30, fontWeight: 'bold', alignSelf: 'center' },
            ]}
          >
            please
          </Text>
          <Text style={{ fontSize: 25, fontFamily: 'PT-Sans', marginTop: 8, alignSelf: 'center' }}>
            {' '}
            select your{' '}
          </Text>
        </View>
        <Text
          style={{ fontSize: 25, fontFamily: 'PT-Sans', alignSelf: 'center', marginBottom: 25 }}
        >
          language?
        </Text>
        <WheelPicker
          selectedItem={this.state.selectedItem}
          data={wheelPickerData}
          onItemSelected={this.onItemSelected}
        />
        <Image source={bottom} style={styles.bottom} />
        <TouchableOpacity style={styles.button} onPress={this.saveselectedItem}>
          <Text style={styles.buttonText}>Continue</Text>
          <AntDesign
            style={{ alignSelf: 'center', color: '#F55963' }}
            name="arrowright"
            size={18}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    alignSelf: 'flex-end',
    height: Dimensions.get('window').height / 7,
    width: Dimensions.get('window').width / 2,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  cycleText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cont: {
    height: 50,
    width: 250,
    alignSelf: 'center',
  },
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    width: 120,
    borderRadius: 5,
    marginTop: -25,
    borderColor: '#F55963',
    position: 'absolute',
    right: 30,
    top: Dimensions.get('window').height - 50,
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    paddingLeft: 10,
    color: '#F55963',
  },
});
