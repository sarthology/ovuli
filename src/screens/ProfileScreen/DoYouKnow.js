import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  AsyncStorage,
  Image,
  Dimensions,
} from 'react-native';
import top from '../../../wireframes/assets/Your_Name/top.png';
import { AntDesign } from '@expo/vector-icons';

export default class DoYouKnow extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', count: '' };
    // console.log(this.state.count);
  }

  saveName = async () => {
    // Saving the Name in Asyncstorage
    try {
      await AsyncStorage.setItem('Name', this.state.text);
    } catch (e) {
      console.log(e);
    }
    if (this.state.count == 'yes') {
      console.log('yes wla');
      this.props.navigation.navigate('AverageCycle');
    }
    if (this.state.count == 'no') {
      console.log('no wlaa');
      this.props.navigation.navigate('LastPeriod');
    }
  };

  countYes = () => {
    // Saving the Name in Asyncstorage
    return this.setState({ count: 'yes' });
  };
  countNo = () => {
    // Saving the Name in Asyncstorage
    return this.setState({ count: 'no' });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={top} style={styles.top} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.nameText}>Do you know your Cycle Length?</Text>
        </View>

        <TouchableOpacity
          style={
            (styles.condbutton,
            this.state.count == 'yes'
              ? {
                  borderWidth: 2,
                  // color: 'red',
                  width: 80,

                  borderRadius: 5,
                  // marginTop: -170,
                  // padding: 4,
                  top: Dimensions.get('window').height - 230,
                  borderColor: '#F55963',
                  position: 'absolute',
                  // right: 30,
                  // top: Dimensions.get('window').height - 50,
                  flex: 1,
                  alignContent: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  left: 80,
                  backgroundColor: '#F55963',
                }
              : {
                  borderWidth: 2,
                  // color: 'red',
                  width: 80,

                  borderRadius: 5,
                  // marginTop: -170,
                  // padding: 4,
                  top: Dimensions.get('window').height - 230,
                  borderColor: '#F55963',
                  position: 'absolute',
                  // right: 30,
                  // top: Dimensions.get('window').height - 50,
                  flex: 1,
                  alignContent: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  left: 80,
                  backgroundColor: null,
                })
          }
          onPress={this.countYes}
        >
          {/* {console.log(this.state.count + 'hello')} */}
          <Text
            style={
              (styles.condText,
              this.state.count == 'yes'
                ? {
                    fontSize: 20,
                    textAlign: 'center',
                    padding: 5,
                    // paddingLeft: 10,
                    color: '#F55963',
                    color: 'white',
                  }
                : {
                    fontSize: 20,
                    textAlign: 'center',
                    padding: 5,
                    // paddingLeft: 10,
                    color: '#F55963',
                    color: '#F55963',
                  })
            }
          >
            Yes
          </Text>
          <AntDesign style={{ alignSelf: 'center', color: '#F55963' }} size={18} />
        </TouchableOpacity>

        <TouchableOpacity
          style={
            (styles.condnobutton,
            this.state.count == 'no'
              ? {
                  borderWidth: 2,
                  width: 80,
                  borderRadius: 5,
                  // marginTop: -170,
                  // padding: 4,
                  top: Dimensions.get('window').height - 230,
                  borderColor: '#F55963',
                  position: 'absolute',
                  // right: 30,
                  // top: Dimensions.get('window').height - 50,
                  flex: 1,
                  alignContent: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  right: 80,
                  backgroundColor: '#F55963',
                }
              : {
                  borderWidth: 2,
                  width: 80,
                  borderRadius: 5,
                  // marginTop: -170,
                  // padding: 4,
                  top: Dimensions.get('window').height - 230,
                  borderColor: '#F55963',
                  position: 'absolute',
                  // right: 30,
                  // top: Dimensions.get('window').height - 50,
                  flex: 1,
                  alignContent: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  right: 80,
                  backgroundColor: null,
                })
          }
          onPress={this.countNo}
        >
          <Text
            style={
              (styles.condText,
              this.state.count == 'no'
                ? {
                    fontSize: 20,
                    textAlign: 'center',
                    padding: 5,
                    // paddingLeft: 10,
                    color: '#F55963',
                    color: 'white',
                  }
                : {
                    fontSize: 20,
                    textAlign: 'center',
                    padding: 5,
                    // paddingLeft: 10,
                    color: '#F55963',
                    color: '#F55963',
                  })
            }
          >
            No
          </Text>
          <AntDesign style={{ alignSelf: 'center', color: '#F55963' }} size={18} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.saveName}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  nameText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 180,
    marginBottom: 20,
    paddingLeft: 20,
    fontFamily: 'PT-Sans',
    fontSize: 25,
  },
  condbutton: {
    borderWidth: 2,
    // color: 'red',
    width: 80,

    borderRadius: 5,
    // marginTop: -170,
    // padding: 4,
    top: Dimensions.get('window').height - 230,
    borderColor: '#F55963',
    position: 'absolute',
    // right: 30,
    // top: Dimensions.get('window').height - 50,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    left: 80,
  },
  condnobutton: {
    borderWidth: 2,
    width: 80,
    borderRadius: 5,
    // marginTop: -170,
    // padding: 4,
    top: Dimensions.get('window').height - 230,
    borderColor: '#F55963',
    position: 'absolute',
    // right: 30,
    // top: Dimensions.get('window').height - 50,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    right: 80,
  },
  condText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    // paddingLeft: 10,
    color: '#F55963',
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
    color: '#f88c70',
    fontSize: 21,
    margin: 15,
    height: 60,
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
