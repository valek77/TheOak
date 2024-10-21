import React, { useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as NavigationBar from 'expo-navigation-bar';


export default function App() {

  useEffect(() => {
    NavigationBar.setPositionAsync('relative');
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBehaviorAsync('inset-swipe'); // Comportamento immersivo
  
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.white}>Open up App.js to start working on your app!</Text>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  white:{
    color:"#fff"
  },  

  container: {
    flex: 1,
    backgroundColor: '#000',
    color:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
