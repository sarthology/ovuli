import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Dimensions, Image, Picker } from 'react-native';


import profile from '@wireframes/assets/Setting_screen/profile.png';
import { Entypo } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  wel: {
    fontSize: 28,
    position: 'relative',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  create: {
    fontSize: 31,
    alignItems: 'stretch',
    color: '#F08080',
  },
  head: {
    fontSize: 35,
    alignSelf: 'flex-start',
  },
  content: {
    height: 50,
    width: 150,
  },
  design: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  profile: {
    alignSelf: 'flex-start',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 50,
    left: 0,
  },
  userInfo: {
    flexDirection: 'row',
  },
});

const COLORS = {
  grey: 'rgb(179, 182, 183)',
}
const ProfileScreen = () => {
  const [language, setLanguage] = React.useState('English');
  const [cycle, setCycle] = React.useState('20 Days');
  const [lastCycle, setLastCycle] = React.useState('14 July 2020');

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Settings</Text>

      <View style={styles.userInfo}>
        <Image source={profile} style={styles.profile} />
        <Text style={styles.wel}>{'\n\n'}Samriddhi</Text>

      </View>

      <View style={styles.design}>
        <MaterialIcons name="language" style={styles.create} />
        <Text style={styles.welcome}>  Language                    </Text>
        <Text >{language} </Text>
          <TouchableHighlight onPress={() => setLanguage('Marathi')}>
           <Feather name="edit-3" size={20} color= {COLORS.grey}/>
          </TouchableHighlight>

      </View>

      <View style={styles.design}>
        <Entypo name="circular-graph" style={styles.create} />

        <Text style={styles.welcome}>  Cycle Length             </Text>
        <Text>{cycle} </Text>
          <TouchableHighlight  onPress={() => setCycle('23 Days')}>
           <Feather name="edit-3" size={20} color= {COLORS.grey}/>
          </TouchableHighlight>

      </View>

      <View style={styles.design}>
        <Feather name="droplet" style={styles.create} />

        <Text style={styles.welcome}> Last Period           </Text>
        <Text>{lastCycle} </Text>
          <TouchableHighlight onPress={() => setLastCycle('19 June 2020')}>
           <Feather name="edit-3" size={20} color= {COLORS.grey}/>
          </TouchableHighlight>

      </View>
    </View>
  );
};

export default ProfileScreen;
