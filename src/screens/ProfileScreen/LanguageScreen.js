import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { WheelPicker } from 'react-native-wheel-picker-android';

import top from '../../../wireframes/assets/Lang_Screen/top.png';
import bottom from '../../../wireframes/assets/Lang_Screen/bottom.png';

const wheelPickerData = [
  'Assamese',
  'Bengali',
  'Bodo',
  'English',
  'Dogri',
  'Gujarati',
  'Hindi',
  'Kannada',
  'Kashmiri',
  'Konkani',
  'Maithili',
  'Malayalam',
  'Manipuri',
  'Marathi',
  'Nepali',
  'Oriya',
  'Punjabi',
  'Sanskrit',
  'Santhali',
  'Sindhi',
  'Tamil',
  'Telugu',
  'Urdu',
];

export default class LanguageScreen extends Component {
  state = { selectedItem: 0 };

  saveSelectedItem = async () => {
    let selectedLanguage = wheelPickerData[this.state.selectedItem];

    try {
      await AsyncStorage.setItem('useLanguage', selectedLanguage);
      this.props.navigation.navigate('Name');
    } catch (error) {
      console.log(error);
    }
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };
  saveselectedItem = async () => {
    // Saving the Name in Asyncstorage
    try {
      await AsyncStorage.setItem('language', this.state.selectedItem);
    } catch (e) {
      console.log(e);
    }

    // Navigating to the next screen
    this.props.navigation.navigate('Name');
  };

  checkData = async () => {
    try {
      const name = await AsyncStorage.getItem('Name');
      const lastPeriod = await AsyncStorage.getItem('lastPeriod');
      const useLanguage = await AsyncStorage.getItem('useLanguage');
      const avgCycle = await AsyncStorage.getItem('AvgPeriod');

      if (name !== null && useLanguage !== null && (lastPeriod !== null || avgCycle !== null)) {
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  render() {
    if (this.checkData() === true) {
      return <View>{this.props.navigation.navigate('Dashboard')}</View>;
    }
    return (
      <View style={styles.container}>
        <Image source={top} style={styles.top} />
        <View style={styles.cycleText}>
          <Text
            style={[
              { fontFamily: 'PT-Sans', fontSize: 30, fontWeight: 'bold', alignSelf: 'center' },
            ]}
          >
            please
          </Text>
          <Text style={{ fontFamily: 'PT-Sans', fontSize: 25, marginTop: 8, alignSelf: 'center' }}>
            {' '}
            select your{' '}
          </Text>
        </View>
        <Text
          style={{ fontFamily: 'PT-Sans', fontSize: 25, alignSelf: 'center', marginBottom: 25 }}
        >
          language?
        </Text>
        {/* <WheelPicker
          selectedItem={this.state.selectedItem}
          data={wheelPickerData}
          onItemSelected={this.onItemSelected}
        /> */}
        <View style={styles.wheelPicker}>
          {/* <WheelPicker
            selectedItem={this.state.selectedItem}
            data={wheelPickerData}
            onItemSelected={this.onItemSelected}
          /> */}
        </View>
        <Image source={bottom} style={styles.bottom} />
        <TouchableOpacity style={styles.button} onPress={this.saveSelectedItem}>
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
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: '100%',
  },
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
  wheelPicker: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
});
