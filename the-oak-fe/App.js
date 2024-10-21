import React, { useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as NavigationBar from 'expo-navigation-bar';

import DeviceUtils from './app/utils/DeviceUtils';
import { Platform } from 'react-native'


export default function App() {

  const [uuid, setUuid] = React.useState(null);


  async function init() {
    if (Platform.OS == "android") {
      NavigationBar.setPositionAsync('relative');
      NavigationBar.setVisibilityAsync('hidden');
      NavigationBar.setBehaviorAsync('inset-swipe'); 
    }
    const tmp = await DeviceUtils.getUUID();

    setUuid(tmp);
  }

  useEffect(() => {
    init();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.white}>{"Ciao da " + uuid}</Text>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: "#fff"
  },

  container: {
    flex: 1,
    backgroundColor: '#000',
    color: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
