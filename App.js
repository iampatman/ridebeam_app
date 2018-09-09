import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import HomeScreen from './src/home/HomeScreen'
import MapScreen from './src/map/MapScreen'
import { createStackNavigator } from 'react-navigation'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: MapScreen
  },

})

export default class App extends Component<Props> {
  render () {
    return (
      <RootStack/>
    )
  }
}

