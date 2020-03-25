import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { WheelPicker } from 'react-native-wheel-picker-android';

import top from '../../../wireframes/assets/Lang_Screen/top.png';
import bottom from '../../../wireframes/assets/Lang_Screen/bottom.png';
import please_select_your_language from '../../../wireframes/assets/Lang_Screen/please_select_your_language.png';

const wheelPickerData = ["Hindi", "Marathi", "English", "Telugu", "Tulu", "Tamil"];

export default class LanguageScreen extends Component {
  state = { selectedItem: 0 };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Image source={top} style={styles.top} />
        <Image source={please_select_your_language} style={styles.cycleText} />
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
    width: Dimensions.get('window').width / 2 ,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  cycleText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 40,
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
