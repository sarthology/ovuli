import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Dimensions,
  Image,
  Picker,
 } from 'react-native';

import profile from '../../../wireframes/assets/Setting_screen/profile.png';
import { Entypo } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons';
import { MaterialIcons} from 'react-native-vector-icons';

export default class ProfileScreen extends Component {
  constructor(props) {
		super(props);
		this.state = {
    language:" ",
    cycle:" ",
    last: " ",
		};
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Settings{'\n'}</Text>

        <View style={{flexDirection: 'row'}}>
          <Image source={profile} style={styles.profile} />
          <Text style={styles.wel}>{'\n\n'}  Samriddhi </Text>
        </View>

        <View style={styles.design}>
          <MaterialIcons name="language" style={styles.create} />
          <Text style={styles.welcome}>  Language</Text>
          <Picker
             selectedValue={this.state.language}
             style={styles.content}
             onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="English" value="English" />
          </Picker>
        </View>

        <View style={styles.design}>
          <Entypo name="circular-graph" style={styles.create} />
          <Text style={styles.welcome}>  Cycle Length</Text>
          <Picker
             selectedValue={this.state.cycle}
             style={styles.content}
             onValueChange={(itemValue, itemIndex) => this.setState({cycle: itemValue})}>
            <Picker.Item label="20 Days" value="20" />
          </Picker>
        </View>

        <View style={styles.design}>
          <Feather name="droplet" style={styles.create}/>
          <Text style={styles.welcome}>  Last Period</Text>
          <Picker
             selectedValue={this.state.last}
             style={styles.content}
             onValueChange={(itemValue, itemIndex) => this.setState({last: itemValue})}>
            <Picker.Item label="14 july 2020" value="14/07/2020" />
          </Picker>
        </View>

      </View>
    );
  }
}

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
    color: '#F08080'
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
    justifyContent: 'space-evenly'
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
  
});
