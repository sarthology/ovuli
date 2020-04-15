import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weekDaysNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const now = moment();
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: 'transparent',
    marginLeft: 15,
    marginRight: 15,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
  },
  weekDaysNamesStyle: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 7,
    marginRight: 7,
    justifyContent: 'space-around',
  },
  weekName: {
    marginTop: 7,
    marginBottom: 7,
    width: 40,
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
  },

  monthText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  yearText: {
    fontSize: 16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 4,
    marginTop: -2,
  },
  leftIcon: {
    transform: [{ rotate: '180deg' }],
  },
  icon: {
    width: 24,
    height: 24,
  },
  disabled: {
    opacity: 0.4,
  },
});

const CalendarHeader = props => {
  function onPressArrowLeft() {
    props.onPressArrowLeft(props.month, props.addMonth);
  }

  function onPressArrowRight() {
    props.onPressArrowRight(props.month, props.addMonth);
  }

  const month = moment(props.month.getTime())
    .format('MMMM')
    .toString();
  const year = moment(props.month.getTime()).format('YYYY');
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={onPressArrowLeft}>
          <MaterialIcons name="keyboard-arrow-left" size={32} color="grey" />
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {month} &nbsp;
          <Text style={styles.yearText}>{year}</Text>
        </Text>

        <TouchableOpacity style={styles.iconContainer} onPress={onPressArrowRight}>
          <MaterialIcons name="keyboard-arrow-right" size={32} color="grey" />
        </TouchableOpacity>
      </View>
      <View style={styles.week}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#f54c63', '#f65e63', '#f78161']}
          style={styles.linearGradient}
        >
          <View style={styles.weekDaysNamesStyle}>
            {weekDaysNames.map((day, index) => (
              <Text key={index} style={styles.weekName} numberOfLines={1}>
                {day}
              </Text>
            ))}
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default CalendarHeader;

CalendarHeader.propTypes = {
  headerData: PropTypes.object,
  horizontal: PropTypes.bool,
  onPressArrowRight: PropTypes.func.isRequired,
  onPressArrowLeft: PropTypes.func.isRequired,
  onPressListView: PropTypes.func.isRequired,
  onPressGridView: PropTypes.func.isRequired,
  addMonth: PropTypes.func,
  month: PropTypes.object,
};
