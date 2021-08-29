import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login/index';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
  'nunito-semibold' : require('./src/assets/fonts/Nunito-SemiBold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Login />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
        onError={() => {}}
      />
    )
  }

}