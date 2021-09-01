import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key : string, value : string) =>{
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
}

export const getData = async (key:string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(value !== null) {
        return value;
      }
      return null;
    } catch(e) {
      // error reading value
      return null;
    }
}

export const removeDatas = async (keys:string[]) => {
  try {
    await AsyncStorage.multiRemove(keys)
  } catch(e) {
    // remove error
  }
}
  