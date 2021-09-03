import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron
  .setAsyncStorageHandler(AsyncStorage) 
  .configure({host : '192.168.0.163'}) 
  .useReactNative() 
  .connect();