import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  Image
} from 'react-native'

export default class MyDetailsPage extends React.Component <{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerContentView}>
          <Text>This is a simple page (as of now :D)</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  centerContentView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
