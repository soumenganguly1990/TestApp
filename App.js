/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import SplashPage from './app/components/SplashPage';
import MyDetailsPage from './app/components/MyDetailsPage';

const Navigation = StackNavigator({
  SplashPage: {
    screen: SplashPage
  },
  MyDetailsPage: {
    screen: MyDetailsPage
  }
});

export default Navigation;
