import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import Root from './src/RootStack';
import Store from './src/store/store';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
  'nunito-semibold' : require('./src/assets/fonts/Nunito-SemiBold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <StoreProvider store={Store}>
        <PaperProvider>
          <Root />
        </PaperProvider>
      </StoreProvider>
    );
  }
  return (
    <AppLoading 
      startAsync={getFonts} 
      onFinish={() => setFontsLoaded(true)} 
      onError={() => {}}
    />
  )
}