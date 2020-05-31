import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Picker } from 'react-native';

import profile from '@wireframes/assets/Setting_screen/profile.png';
import { Entypo } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';
import i18n from '@/i18n';
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
    height: 40,
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

const ProfileScreen = () => {
  const [language, setLanguage] = React.useState('English');
  const [cycle, setCycle] = React.useState('20 Days');
  const [lastCycle, setLastCycle] = React.useState('14 July 2020');

  return (
    <View style={styles.container}>
      <Text style={styles.head}>{i18n.t('settings')}</Text>

      <View style={styles.userInfo}>
        <Image source={profile} style={styles.profile} />
        <Text style={styles.wel}>{'\n\n\n '} Samriddhi</Text>
      </View>

      <View style={styles.design}>
        <MaterialIcons name="language" style={styles.create} />
        <Text style={styles.welcome}>
          {i18n.t('language')}
          {/* Language */}
        </Text>
        <Picker
          selectedValue={language}
          style={styles.content}
          onValueChange={language => setLanguage(language)}
        >
          <Picker.Item label="English" value="English" />
        </Picker>
      </View>

      <View style={styles.design}>
        <Entypo name="circular-graph" style={styles.create} />
        <Text style={styles.welcome}>{i18n.t('cycle_length')}</Text>
        <Picker
          selectedValue={cycle}
          style={styles.content}
          onValueChange={cycle => setCycle(cycle)}
        >
          <Picker.Item label="20 Days" value="20" />
        </Picker>
      </View>

      <View style={styles.design}>
        <Feather name="droplet" style={styles.create} />
        <Text style={styles.welcome}>{i18n.t('last_period')}</Text>
        <Picker
          selectedValue={lastCycle}
          style={styles.content}
          onValueChange={lastCycle => setLastCycle(lastCycle)}
        >
          <Picker.Item label="14 july 2020" value="14/07/2020" />
        </Picker>
      </View>
    </View>
  );
};

export default ProfileScreen;
