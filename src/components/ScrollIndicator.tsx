import React from 'react';
import { View, Animated } from 'react-native';

import { Colors  } from '../theme';
import { IChartData } from '../constants';

interface IScrollIndicator {
    scrollX: Animated.Value;
    data: IChartData[];
    width: number;
}

const ScrollIndicator :React.FC<IScrollIndicator> = ({ scrollX, data , width}) => {
    const dotPosition = Animated.divide(scrollX, width -5);

    return(
        <View
            style={{ height : 30, marginTop : 5 }}
        >
            <View
                style={{
                    flexDirection : 'row', 
                    alignItems : 'center', 
                    justifyContent : 'center'
                }}
            >
                {
                    data.map((item : any, i : any) => {
                        const opacity = dotPosition.interpolate({
                            inputRange : [i - 1, i , i + 1],
                            outputRange : [0.3 , 1 , 0.3],
                            extrapolate : 'clamp'
                        });

                        const dotSize = dotPosition.interpolate({
                            inputRange : [i - 1, i , i + 1],
                            outputRange : [8 * 0.8 , 10 , 8 * 0.8],
                            extrapolate : 'clamp'
                        });

                        const dotColor = dotPosition.interpolate({
                            inputRange : [i - 1, i , i + 1],
                            outputRange : [Colors.darkGray, item.color, Colors.darkGray],
                            extrapolate : 'clamp'
                        });

                        return (
                            <Animated.View
                                key={`dot-${i}`}
                                style={{
                                    borderRadius : 12,
                                    marginHorizontal : 6,
                                    width : dotSize,
                                    height : dotSize,
                                    opacity : opacity,
                                    backgroundColor : dotColor
                                }}
                            />
                        )
                    })
                }  
            </View>
        </View>
    )
}


export default ScrollIndicator
