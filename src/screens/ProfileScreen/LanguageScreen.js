import 'react-native-gesture-handler';
import * as React from 'react';
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
import SmoothPicker from 'react-native-smooth-picker';
import { useNavigation } from '@react-navigation/native';
import top from '@wireframes/assets/Lang_Screen_SVG/top.svg';
import bottom from '@wireframes/assets/Lang_Screen_SVG/bottom.svg';
import i18n from '@/i18n';

const languages = [
  'Assamese',
  'Bengali',
  'English',
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
  'Sindhi',
  'Tamil',
  'Telugu',
  'Urdu',
];

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
    height: 270,
    width: '100%',
    alignItems: 'center',
  },
  itemStyleVertical: {
    width: 150,
    height: 50,
    justifyContent: 'center',
  },
  itemSelectedStyleVertical_: {
    borderRadius: 10,
    backgroundColor: '#F55963',
  },
});

const Bubble = ({ children, selected }) => {
  return (
    <View style={[styles.itemStyleVertical, selected && styles.itemSelectedStyleVertical_]}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: selected ? 20 : 17,
          color: selected ? 'white' : 'gray',
          fontWeight: selected ? 'bold' : 'normal',
        }}
      >
        {children}
      </Text>
    </View>
  );
};

const LanguageScreen = () => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = React.useState(
    languages.indexOf('English'),
  );
  const navigation = useNavigation();
  const saveUserLanguage = async () => {
    try {
      let selectedLanguage = languages[selectedLanguageIndex];
      await AsyncStorage.setItem('userLanguage', selectedLanguage);
      i18n.locale = selectedLanguage;

      navigation.navigate('Name');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={top} style={styles.top} />
      <View style={styles.cycleText}>
        <Text
          style={[{ fontFamily: 'PT-Sans', fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }]}
        ></Text>
        <Text style={{ fontFamily: 'PT-Sans', fontSize: 25, marginTop: 8, alignSelf: 'center' }}>
          {i18n.t('please_select_your_language')}
        </Text>
      </View>
      <Text
        style={{ fontFamily: 'PT-Sans', fontSize: 25, alignSelf: 'center', marginBottom: 25 }}
      ></Text>
      <View style={styles.wheelPicker}>
        <SmoothPicker
          initialScrollToIndex={2}
          // ref={ref => (this.refList = ref)}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          // bounces={true}
          offsetSelection={50}
          magnet={true}
          scrollAnimation={true}
          data={languages}
          onSelected={({ index }) => setSelectedLanguageIndex(index)}
          renderItem={({ item, index }) => (
            <Bubble selected={index === selectedLanguageIndex}>{item}</Bubble>
          )}
        />
      </View>
      <Image source={bottom} style={styles.bottom} />
      <TouchableOpacity style={styles.button} onPress={saveUserLanguage}>
        <Text style={styles.buttonText}>{i18n.t('continue')}</Text>
        <AntDesign
          style={{ alignSelf: 'center', color: '#F55963', top: 2, left: -4 }}
          name="arrowright"
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;
