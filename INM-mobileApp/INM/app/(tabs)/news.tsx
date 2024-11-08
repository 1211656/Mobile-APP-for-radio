import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'

export class news extends Component {
  render() {
    return (
      <GestureHandlerRootView>
        
          <ScrollView style={{backgroundColor: 'black'}}>

          </ScrollView>
        
      </GestureHandlerRootView>
    )
  }
}

export default news