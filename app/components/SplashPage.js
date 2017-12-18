import React, { Component } from 'react';

import {
  Platform,
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ToastAndroid
} from 'react-native'
import { StackNavigator } from 'react-navigation';

const platformDetails = Platform.select({
  ios: 'You are using and iPhone',
  android: 'You are using an Android phone',
});

export default class SplashPage extends React.Component<{}> {

  static navigationOptions = {
    title: 'Splash Page'
  };

  onPressShowToast() {
    Alert.alert('Test Alert', 'This is a simple alert for testing',
          [
            {text: 'Cancel', onPress: () => ToastAndroid.show('Cancel button pressed', ToastAndroid.SHORT), style: 'cancel'},
            {text: 'OK', onPress: () => ToastAndroid.show('Ok button pressed', ToastAndroid.SHORT)}
          ],
        { cancelable: false })
  }

  onPressGoToNextPage() {
    ToastAndroid.show('Ho ho', ToastAndroid.SHORT)
    this.props.navigation.navigate('MyDetailsPage')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeBanner}>!! Splash !!</Text>
        <Text style={styles.simpleHeader}>{platformDetails}</Text>
        <View style={styles.justHeight}/><View style={styles.justHeight}/><View style={styles.justHeight}/>
        <View style={styles.justHeight}/><View style={styles.justHeight}/>
        <View style={styles.centerOfScreen}>
          <Button
            onPress={this.onPressShowToast}
            title="Press Me"
            accessibilityLabel="Learn more about this purple button"/>
          <View style={styles.justHeight}/>
          <View style={styles.justHeight}/>
          <Button
            onPress={() => this.onPressGoToNextPage() }
            title="Next Page"
            accessibilityLabel="Go to the next page"/>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  welcomeBanner: {
    color: '#454545',
    fontSize: 35,
    justifyContent: 'center'
  },
  simpleHeader: {
    color: '#565656',
    fontSize: 20,
    justifyContent: 'flex-start'
  },
  justHeight: {
    height: 10
  },
  centerOfScreen: {
    marginLeft: 50,
    marginRight: 50,
    flexDirection:'column'
  },
  purpleButton: {
    backgroundColor: '#841584',
    color: '#FFFFFF',
    justifyContent: 'center'
  },
  nextPageButton: {
    backgroundColor: '#567890',
    color: '#FFFFFF',
    margin: 20,
    justifyContent: 'center'
  }
});
