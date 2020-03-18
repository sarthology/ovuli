import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { CalendarList } from 'react-native-calendars';
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
    marginVertical: 24,
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
  calenderWeekHeader: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 10,
    borderColor: '#F55963',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#F55963',
    textAlignVertical: 'center',
  },
  dayHeader: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
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
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  console.log(selectedDate);
  return (
    <View style={styles.container}>
      <Image style={styles.topImage} source={TopImage} />
      <View style={{ padding: 20, alignSelf: 'flex-start' }}>
        <Image style={styles.lastPeriodText} source={AskLastPeriodImage} />
      </View>

      <View style={styles.calenderContainer}>
        <CalendarList
          theme={{
            todayTextColor: '#F55963',
            textDayFontWeight: '500',
            'stylesheet.calendar.header': {
              week: { ...styles.calenderWeekHeader },
              header: {
                height: 0,
              },
              dayHeader: { ...styles.dayHeader },
            },
          }}
          current={Date()}
          onDayPress={dateObject => {
            setSelectedDate(new Date(dateObject.dateString));
          }}
          onVisibleMonthsChange={month => {
            console.log('month changed', month);
          }}
          firstDay={1}
          scrollEnabled={true}
          horizontal={true}
          pagingEnabled={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Dashboard')}
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
