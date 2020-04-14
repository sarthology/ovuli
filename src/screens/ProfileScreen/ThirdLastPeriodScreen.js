import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  StatusBar,
} from 'react-native';
// eslint-disable-next-line import/named
import CalendarPicker, { CALENDAR_WEEK_DAYS } from 'react-native-calendar-picker';
import { AntDesign } from '@expo/vector-icons';
import i18n from '@/i18n';
import TopImage from '@/assets/images/Last_Period/top.png';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topImageContainer: {
    padding: 20,
    alignSelf: 'flex-start',
  },
  topImage: {
    alignSelf: 'flex-end',
  },
  lastPeriodText: {
    alignSelf: 'flex-start',
    marginVertical: 25,
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
    justifyContent: 'center',
    color: '#F55963',
  },
  calenderContainer: {
    height: '60%',
  },
  buttonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  arrowIcon: {
    alignSelf: 'center',
    color: '#F55963',
    justifyContent: 'flex-end',
  },
  selectedDate: {
    backgroundColor: '#F55963',
  },
  dayOfWeekStyles: {
    backgroundColor: '#F55963',
  },
});

const ThirdLastPeriodScreen = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const navigation = useNavigation();

  const saveLastPeriod = () => {
    try {
      AsyncStorage.setItem('thirdLastPeriod', selectedDate.toISOString());
    } catch (error) {
      console.log(error);
    }

    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image style={styles.topImage} source={TopImage} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginBottom: 20,
          width: Dimensions.get('window').width - 70,
          marginLeft: 20,
        }}
      >
        <Text
          style={[styles.nameText, { fontFamily: 'PT-Sans', fontSize: 30, fontWeight: 'bold' }]}
        ></Text>
        <Text style={{ fontSize: 25, fontFamily: 'PT-Sans', marginTop: 8 }}>
          {i18n.t('when_was_your_third_last_period')}
        </Text>
      </View>

      <View style={styles.calenderContainer}>
        <CalendarPicker
          onDateChange={date => setSelectedDate(date)}
          startFromMonday={true}
          previousTitle=""
          nextTitle=""
          headingLevel={0}
          weekdays={CALENDAR_WEEK_DAYS}
          dayOfWeekStyles={styles.dayOfWeekStyles}
          selectedDayStyle={styles.selectedDate}
          selectedDayTextColor="#fff"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={saveLastPeriod}>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>{i18n.t('finish')}</Text>
          <AntDesign style={styles.arrowIcon} name="arrowright" size={18} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ThirdLastPeriodScreen;
