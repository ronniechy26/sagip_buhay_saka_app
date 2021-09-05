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

export const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};
