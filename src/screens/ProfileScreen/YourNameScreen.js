import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  AsyncStorage,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import top from '@wireframes/assets/Your_Name/top.png';
import bottom from '@wireframes/assets/Your_Name/bottom.png';
import { useNavigation } from '@react-navigation/native';
import i18n from '@/i18n';

import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  top: {
    position: 'absolute',

    top: 0,
    right: 0,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    // top: -60,
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  nameText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 27,
    fontFamily: 'PT-Sans',
    fontSize: 25,
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
  inputContainer: {
    // flex:1,
    color: '#f88c70',
    fontSize: 21,
    // position: 'absolute',
    margin: 15,
    marginBottom: Dimensions.get('window').height - 400,
    // height: 700,
    // top: 20,
    borderBottomWidth: 5,
    borderBottomColor: '#f2f7fd',
    padding: 15,
    width: '85%',
  },
  buttonContainer: {
    backgroundColor: '#45CE30',
    borderRadius: 10,
    padding: 8,
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    width: '20%',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
});

const YourNameScreen = () => {
  const [name, setName] = React.useState(null);
  const navigation = useNavigation();

  const saveName = async () => {
    // Saving the Name in Asyncstorage
    try {
      await AsyncStorage.setItem('Name', name);
    } catch (e) {
      console.log(e);
    }
    if (name) {
      console.log(name);
      // Navigating to the next screen
      navigation.navigate('DoYouKnow');
    } else {
      alert('Please enter your Name to Proceed');
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      enableOnAndroid={true}
      enableAutoAutomaticScroll={true}
      keyboardOpeningTime={0}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <View style={styles.container}>
          <Image source={top} style={styles.top} />
          <View style={{ flexDirection: 'row', marginTop: 200 }}>
            <Text
              style={[styles.nameText, { fontFamily: 'PT-Sans', fontSize: 30, fontWeight: 'bold' }]}
            ></Text>
            <Text style={styles.nameText}>{i18n.t('how_can_we_call_you')}</Text>
          </View>

          <TextInput
            style={styles.inputContainer}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            placeholder={i18n.t('please_enter_your_name')}
            onChangeText={text => setName(text)}
            value={name}
          />
          <Image source={bottom} style={styles.bottom} />
          <TouchableOpacity style={styles.button} onPress={saveName}>
            <Text style={styles.buttonText}>{i18n.t('continue')}</Text>
            <AntDesign
              style={{ alignSelf: 'center', color: '#F55963', top: 2, left: -4 }}
              name="arrowright"
              size={18}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default YourNameScreen;
