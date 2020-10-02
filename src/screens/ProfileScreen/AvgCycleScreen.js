import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SmoothPicker from 'react-native-smooth-picker';
import top from '@wireframes/assets/Avg_Cycle_SVG/top.svg';
import i18n from '@/i18n';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  top: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2,
  },

  cycleText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 40,
  },

  button: {
    borderWidth: 2,
    width: 120,
    marginTop: -25,
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

  itemStyleHorizontal: {
    marginLeft: 10,
    marginRight: 10,
    width: 50,
    height: 50,
    paddingTop: 13,
    borderWidth: 1,
    borderColor: '#F55963',
    borderRadius: 25,
  },

  itemSelectedStyleHorizontal: {
    paddingTop: 11,
    borderColor: '#fff',
  },

  itemSelectedStyleHorizontal_: {
    paddingTop: 11,
    borderWidth: 2,
    borderColor: '#F55963',
    backgroundColor: '#F55963',
  },
});

const Bubble = props => {
  const { children, selected } = props;
  return (
    <View
      style={[
        styles.itemStyleHorizontal,
        selected ? styles.itemSelectedStyleHorizontal_ : styles.itemSelectedStyleHorizontal,
      ]}
    >
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

const AvgCycle = () => {
  const navigation = useNavigation();
  const [userAverageCycle, setUserAverageCycle] = React.useState(0);

  const saveAvgPeriod = async () => {
    try {
      await AsyncStorage.setItem('AvgPeriod', JSON.stringify(userAverageCycle));
    } catch (error) {
      console.log(error);
    }

    navigation.navigate('LastPeriod', { prevScreen: 'AverageCycle' });
  };

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Image source={top} style={styles.top} />
      <View style={[{ flexDirection: 'row' }, styles.cycleText]}>
        <Text
          style={[{ fontFamily: 'PT-Sans', fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }]}
        ></Text>
        <Text style={{ fontSize: 25, fontFamily: 'PT-Sans', marginTop: 8 }}>
          {i18n.t('how_long_is_your_cycle')}
        </Text>
      </View>
      <View style={styles.wrapperHorizontal}>
        <StatusBar hidden />
        <SmoothPicker
          initialScrollToIndex={userAverageCycle + 1}
          ref={ref => (this.refList = ref)}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          data={Array.from({ length: 40 }, (_, i) => 1 + i)}
          onSelected={({ index }) => setUserAverageCycle(index)}
          renderItem={({ item, index }) => (
            <Bubble horizontal selected={++index === userAverageCycle + 1}>
              {item}
            </Bubble>
          )}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={saveAvgPeriod}>
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

export default AvgCycle;
