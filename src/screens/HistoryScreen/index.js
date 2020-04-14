import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import i18n from '@/i18n';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{i18n.t('history')}</Text>
    </View>
  );
};

export default HistoryScreen;
