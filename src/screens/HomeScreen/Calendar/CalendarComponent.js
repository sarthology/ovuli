import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-toggle-calendar';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import CalendarDayComponent from './CalendarDayComponent';
import CalendarHeaderComponent from './CalendarHeaderComponent';

let calendarDate = moment();

class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarDate: calendarDate.format('YYYY-MM-DD'),
      horizontal: false,
      markingDates: {},
    };

    this.onPressArrowLeft = this.onPressArrowLeft.bind(this);
    this.onPressArrowRight = this.onPressArrowRight.bind(this);
    this.onPressListView = this.onPressListView.bind(this);
    this.onPressGridView = this.onPressGridView.bind(this);
    this.onDayPress = this.onDayPress.bind(this);
  }

  onPressArrowLeft() {
    calendarDate = calendarDate.add(-1, 'month');
    this.updateCalendarDate();
  }

  onPressArrowRight() {
    calendarDate = calendarDate.add(1, 'month');
    this.updateCalendarDate();
  }

  onPressListView() {
    this.setState({ horizontal: true });
  }

  onPressGridView() {
    this.setState({ horizontal: false });
  }

  onDayPress(date) {
    // calendarDate = moment(date.dateString);
    // this.updateCalendarDate();
  }

  updateCalendarDate() {
    this.setState({
      calendarDate: calendarDate.format('YYYY-MM-DD'),
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Calendar
          current={this.state.calendarDate}
          // dayComponent={CalendarDayComponent}
          calendarHeaderComponent={CalendarHeaderComponent}
          headerData={{
            calendarDate: calendarDate.format('MMM, YYYY'),
          }}
          style={{
            paddingLeft: 0,
            paddingRight: 0,
          }}
          theme={{
            textDayFontSize: 18,
          }}
          markingType={'custom'} //{"period"}
          markedDates={{
            // [this.state.calendarDate]: {
            //   selected: true,
            //   selectedColor: "#e35052",
            // },
            [this.state.calendarDate]: {
              customStyles: {
                container: {
                  backgroundColor: '#e35052',
                },
                text: {
                  color: '#eeee',
                  fontWeight: 'bold',
                },
              },
            },
            '2020-04-10': {
              customStyles: {
                container: {
                  backgroundColor: '#fab3a0',
                },
                text: { color: '#635e5d' },
              },
            },
            '2020-04-11': {
              customStyles: {
                container: {
                  backgroundColor: '#fab3a0',
                },
                text: { color: '#635e5d' },
              },
            },
          }}
          onDayPress={this.onDayPress}
          onPressArrowLeft={this.onPressArrowLeft}
          onPressArrowRight={this.onPressArrowRight}
          onPressListView={this.onPressListView}
          onPressGridView={this.onPressGridView}
          horizontal={this.state.horizontal}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          onDayPress={this.onDayPress}
          hideExtraDays
        />
        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#e8f1fb',
            borderBottomWidth: 3,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            justifyContent: 'space-around',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="checkbox-blank-circle" size={32} color="#fbc0b0" />
            <Text style={{ alignSelf: 'center', marginLeft: 5 }}>Ovulation</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="checkbox-blank-circle" size={32} color="#d2e1fc" />
            <Text style={{ alignSelf: 'center', marginLeft: 5 }}>Periods</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: '#e8f1fb',
            borderBottomWidth: 3,
          }}
        />
      </View>
    );
  }
}

export default CalendarComponent;
