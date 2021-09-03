import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import { useAssets } from 'expo-asset';

import Root from './src/RootStack';
import Store from './src/store/store';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
  'nunito-semibold' : require('./src/assets/fonts/Nunito-SemiBold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [assets] = useAssets([
    require('./src/assets/images/image.jpg'), 
    require('./src/assets/images/ImgBg.jpg'), 
    require('./src/assets/images/profile.png'), 
  ]);

  if (fontsLoaded && assets) {
    return (
      <StoreProvider store={Store}>
        <PaperProvider>
          <Root />
          <FlashMessage position="top"/>
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