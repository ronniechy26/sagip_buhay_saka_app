import React, { useRef } from 'react';
import { View, useWindowDimensions, Animated } from 'react-native';

import MintempChart from '../min_temp/MintempChart';
import { Images,  } from '../../../../theme';
import {CardIcon, Legend, ScrollIndicator} from '../../../../components';

import { IDashboardRainfall } from '../../../../models/DashboardModel';
import { chartData } from '../../../../constants/ChartData';
import { getDashboardData } from '../../../../selectors/DashboardSelectors';
import { chartStyles } from '../../ChartStyles';

interface IProps  {
    data : IDashboardRainfall[];
    status : any
}

const Maxtemp : React.FC<IProps> = (props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width } = useWindowDimensions();

    return (
        <View style={[
            chartStyles.Card, 
            chartStyles.shadow, 
            chartStyles.containter
        ]}>
            <View style={chartStyles.header}>
                <CardIcon 
                    icon={Images.Max}
                    title="Max Temperature"
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
                                    <MintempChart    
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

export default Maxtemp;


