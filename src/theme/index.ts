import { StatusBar } from 'react-native';

export { default as Images } from './Images';
export { default as Colors } from './Colors';
export { default as GlobalStyles } from './GlobalStyles';
export { default as Fonts } from './Font';
export { default as VictoryTheme } from './VictoryTheme';


export const showMessageStyle  = {
    animationDuration : 450,
    floating : true,
    statusBarHeight : StatusBar.currentHeight,
    titleStyle:{
        fontFamily : 'nunito-bold'
    },
    textStyle : {
        fontFamily : 'nunito-semibold'
    }
}

export const MONTHS =[
    { text: 'January', value: 1 }, 
    { text: 'February', value: 2 }, 
    { text: 'March', value: 3 }, 
    { text: 'April', value: 4 }, 
    { text: 'May', value: 5 }, 
    { text: 'June', value: 6 }, 
    { text: 'July', value: 7 }, 
    { text: 'August', value: 8 }, 
    { text: 'September', value: 9 }, 
    { text: 'October', value: 10 }, 
    { text: 'November', value: 11 }, 
    { text: 'December', value: 12 }, 
]