import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import CalendarPicker, { CALENDAR_WEEK_DAYS } from 'react-native-calendar-picker';
import { AntDesign } from '@expo/vector-icons';
import TopImage from '../../assets/images/Last_Period/top.png';
import AskLastPeriodImage from '../../assets/images/Last_Period/AskLastPeriod.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    height: '80%',
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
});

const LastPeriodScreen = props => {
  const [selectedDate, setSelectedDate] = React.useState();

  return (
    <View style={styles.container}>
      <Image style={styles.topImage} source={TopImage} />
      <View style={{ padding: 20, alignSelf: 'flex-start' }}>
        <Image style={styles.lastPeriodText} source={AskLastPeriodImage} />
      </View>

      <View style={styles.calenderContainer}>
        <CalendarPicker
          onDateChange={date => setSelectedDate(date)}
          startFromMonday={true}
          previousTitle=""
          nextTitle=""
          headingLevel={0}
          weekdays={CALENDAR_WEEK_DAYS}
          dayOfWeekStyles={{
            backgroundColor: '#F55963',
          }}
          selectedDayStyle={{ backgroundColor: '#F55963' }}
          selectedDayTextColor="#fff"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Dashboard', { lastPeriodDate: selectedDate })}
      >
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>Finish</Text>
          <AntDesign style={styles.arrowIcon} name="arrowright" size={18} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LastPeriodScreen;
