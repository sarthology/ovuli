/* eslint-disable no-dupe-keys */
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Dimensions } from 'react-native';
import top from '@wireframes/assets/Your_Name/top.png';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import i18n from '@/i18n';

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

const DoYouKnow = () => {
  const navigation = useNavigation();

  const countYes = () => {
    navigation.navigate('AverageCycle');
  };
  const countNo = () => {
    navigation.navigate('LastPeriod', { prevScreen: 'DoYouKnow' });
  };

  return (
    <View style={styles.container}>
      <Image source={top} style={styles.top} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.nameText}>{i18n.t('do_you_know_your_cycle_length')}</Text>
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 2,

          width: 80,

          borderRadius: 5,

          top: Dimensions.get('window').height - 230,
          borderColor: '#F55963',
          position: 'absolute',

          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          left: 80,
          backgroundColor: '#F55963',
        }}
        onPress={countYes}
      >
        <Text
          style={
            (styles.condText,
            [
              {
                fontSize: 20,
                textAlign: 'center',
                padding: 5,

                color: '#F55963',

                color: 'white',
              },
            ])
          }
        >
          {i18n.t('yes')}
        </Text>
        <AntDesign style={{ alignSelf: 'center', color: '#F55963' }} size={18} />
      </TouchableOpacity>

      <TouchableOpacity
        style={
          (styles.condnobutton,
          [
            {
              borderWidth: 2,
              width: 80,
              borderRadius: 5,

              top: Dimensions.get('window').height - 230,
              borderColor: '#F55963',
              position: 'absolute',

              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              right: 80,
              backgroundColor: '#F55963',
            },
          ])
        }
        onPress={countNo}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            padding: 5,

            color: '#F55963',
            color: 'white',
          }}
        >
          {i18n.t('no')}
        </Text>
        <AntDesign style={{ alignSelf: 'center', color: '#F55963' }} size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default DoYouKnow;
