import 'react-native-gesture-handler';
import * as React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 17,
    padding: 4,
    textAlign: 'left',
  },
});

const CalculatingCyclePeriodPage = () => {
  const [markedDates, setMarkedDates] = React.useState({});
  const [isStartDatePicked, setIsStartDatePicked] = React.useState(false);
  const [duration, setDuration] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const navigation = useNavigation();

  const onDayPress = day => {
    if (isStartDatePicked) {
      let markedDatesObject = {
        day: {
          dateString: {
            startingDay: true,
            color: '#00B0BF',
            textColor: '#FFFFFF',
          },
        },
      };
      setMarkedDates(markedDatesObject);
      setIsStartDatePicked(true);
      setDuration('');
      setStartDate(day.dateString);
    } else {
      let markedDates = markedDates;
      let startDateTime = moment(startDate);
      let endDate = moment(day.dateString);
      let range = endDate.diff(startDateTime, 'days');
      let duration = moment.duration(startDateTime.diff(endDate)).asDays();

      if (range > 0) {
        for (let i = 1; i <= range; i++) {
          let tempDate = startDate.add(1, 'day');
          tempDate = moment(tempDate).format('YYYY-MM-DD');
          if (i < range) {
            markedDates[tempDate] = { color: '#00B0BF', textColor: '#FFFFFF' };
          } else {
            markedDates[tempDate] = { endingDay: true, color: '#00B0BF', textColor: '#FFFFFF' };
          }
        }

        setMarkedDates(markedDates);
        setIsStartDatePicked(false);
        setDuration(29);
        setStartDate(day.dateString);

        console.log(duration);
      } else {
        alert('Select an upcoming date!');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>On the Calender shown below Please select :</Text>
      <Text style={styles.welcome}>1. First day of previous menstrual period.</Text>
      <Text style={styles.welcome}>2. First day of latest menstrual period.</Text>
      <Calendar
        maxDate={Date()}
        monthFormat={'MMMM yyyy'}
        markedDates={markedDates}
        markingType="period"
        hideExtraDays={true}
        hideDayNames={true}
        onDayPress={onDayPress}
      />
      <Text style={styles.welcome}>The ovulation cycle is of following Days </Text>
      <TextInput
        style={styles.welcome}
        placeholder="00 Days"
        onChangeText={text => setDuration(text)}
        value={duration}
      />
      <Button title="next" onPress={() => navigation.navigate('LastPeriod')} />
    </View>
  );
};

export default CalculatingCyclePeriodPage;
