import React, { useRef } from 'react';
import { View, StyleSheet , useWindowDimensions, Animated } from 'react-native';

import { Colors, Images,  } from '../../../../theme';
import {CardIcon, Legend, ScrollIndicator} from '../../../../components';
import RainfallChart from './RainfallChart';
import { IDashboardRainfall } from '../../../../models/DashboardModel';
import { chartData } from '../../../../constants/ChartData';
import { getDashboardData } from '../../../../selectors/DashboardSelectors';

interface IProps  {
    data : IDashboardRainfall[];
    status : any
}

const Rainfall : React.FC<IProps> = (props) => {
    const scrollX = new Animated.Value(0);
    const { width } = useWindowDimensions();

    return (
        <View style={[
            styles.Card, 
            styles.shadow, 
            styles.containter
        ]}>
            <View style={styles.header}>
                <CardIcon 
                    icon={Images.RainIcon}
                    title="Rainfall"
                />
            </View>
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={60}
                snapToAlignment="center"
                snapToInterval={width - 5}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                onScroll={Animated.event([
                    {
                        nativeEvent : {contentOffset : {x : scrollX}}
                    }
                ], { useNativeDriver : false})}
            >
                {
                    chartData.map((item, index) =>{
                        return(
                            <View 
                                key={`chart-${index}`}
                                style={{
                                    marginLeft : index === 0 ? 8 : 0
                                }}
                            >
                                <View style={{marginTop : -35}}>
                                    <RainfallChart 
                                        color={item.color}
                                        data={ getDashboardData(props.data, item.key)}
                                    />
                                </View>
                            </View>
                        )
                    })
                }
            </Animated.ScrollView>
            <Legend/>
            <ScrollIndicator 
                width={width} 
                data={chartData}
                scrollX={scrollX}
            />
        </View>
    )
}

export default Rainfall;

const styles= StyleSheet.create({
    containter : {
        flex : 1
    },
    Card : {
        margin : 10,
        backgroundColor : Colors.white,
        borderRadius : 12,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    header: {
        paddingTop : 5,
        paddingHorizontal :15
    }
})
