import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StockTicker from './StockTicker';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StockTicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
