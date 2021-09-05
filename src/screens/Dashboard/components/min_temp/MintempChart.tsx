import React from 'react';
import { Dimensions } from 'react-native';
import { 
    VictoryChart, 
    VictoryAxis, 
    VictoryArea,
    VictoryLabel,
    VictoryGroup
} from 'victory-native';

import { MONTHS } from '../../../../constants';
import { VictoryTheme, Colors } from '../../../../theme';

const { width } = Dimensions.get("window");

type IProps = {
    data : any;
    color : string;
}

const RainfallChart : React.FC<IProps> = (props) => {
    const getMax = (arr : any) =>{
        return Math.max.apply(Math, arr.map((x : any) => x.y));
    }

    const getMin = (arr : any) =>{
        return Math.min.apply(Math, arr.map((x : any) => x.y));
    }
    console.log(getMin(props.data), getMax(props.data))
    return (
        <VictoryChart
            theme={VictoryTheme}
            width={width - 5}
            height={250}
        >
            <VictoryGroup
                categories={{
                    x : MONTHS.map(x => x.text.substring(0,3).toLocaleUpperCase()  )
                }}
                // domain={{y: [getMin(props.data), getMax(props.data) ]}}
            >
                <VictoryArea
                    interpolation="natural"
                    data={props.data}
                    style={{ data: { fill: props.color} }}
                    // labels={({ datum } : any) => datum.y}
                    // labelComponent={<VictoryLabel renderInPortal dy={-20}/>}
                />
            </VictoryGroup>

            <VictoryAxis
                style={{
                    grid : {
                        stroke : 'transparent'
                    },
                    axis : {
                        stroke : Colors.darkGray,
                        strokeWidth: 1,
                    }
                }}
                tickLabelComponent={<VictoryLabel angle={45} style={{fontSize : 10}} />}
            />
            <VictoryAxis
                dependentAxis
                style={{
                    grid : {
                        stroke : 'grey'
                    },
                    axis : {
                        stroke : Colors.darkGray,
                        strokeWidth: 1,
                    }
                }}
            />
        </VictoryChart>
    )
}

export default RainfallChart;
