import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Dimensions,
  TouchableHighlight,
  Image,
 } from 'react-native';

import profile from '../../../wireframes/assets/Setting_screen/profile.png';
import { Entypo } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons';
import { MaterialIcons} from 'react-native-vector-icons';

export default class ProfileScreen extends Component {
  constructor(props) {
		super(props);
		this.state = {
    language:"English",
    cycle:"20 Days",
    last: "14 July 2020",
		};
  }
  
  onPress = () => {
    this.setState({
      language:"Marathi",
    })
  }
  onPress0 = () => {
    this.setState({
      cycle:"23 Days",
    })
  }
  onPress1 = () => {
    this.setState({
      last: "19 June 2020",
    })
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
          <Text style={styles.welcome}>  Language                    </Text>
          <Text >{this.state.language} </Text>
          <TouchableHighlight onPress={this.onPress}>
           <Feather name="edit-3" size={20} color='#C0C0C0'/>
          </TouchableHighlight>
        </View>

        <View style={styles.design}>
          <Entypo name="circular-graph" style={styles.create} />
          <Text style={styles.welcome}>  Cycle Length              </Text>
          <Text>{this.state.cycle} </Text>
          <TouchableHighlight  onPress={this.onPress0}>
           <Feather name="edit-3" size={20} color='#C0C0C0'/>
          </TouchableHighlight>
        </View>

        <View style={styles.design}>
          <Feather name="droplet" style={styles.create}/>
          <Text style={styles.welcome}>  Last Period           </Text>
          <Text>{this.state.last} </Text>
          <TouchableHighlight onPress={this.onPress1}>
           <Feather name="edit-3" size={20} color='#C0C0C0'/>
          </TouchableHighlight>
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
