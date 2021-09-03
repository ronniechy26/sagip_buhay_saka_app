import React from 'react';
import { Dimensions  } from 'react-native';
import { 
    VictoryChart, 
    VictoryAxis, 
    VictoryScatter, 
    VictoryLine, 
    VictoryLabel,
    VictoryGroup
} from 'victory-native';

import { MONTHS } from '../../../../constants';
import { IDashboardRainfall } from '../../../../models/DashboardModel';
import { VictoryTheme, Colors } from '../../../../theme';
const { width } = Dimensions.get("window");

type IProps = {
    data : IDashboardRainfall[]
}

const RainfallChart : React.FC<IProps> = (props) => {

    console.log(props)
    return (
        <VictoryChart
            theme={VictoryTheme}
            height={250}
            width={width - 5}
        >
            <VictoryGroup
                categories={{
                    x : MONTHS.map(x => x.text.substring(0,3).toLocaleUpperCase()  )
                }}
            >
                <VictoryLine 
                    animate={{
                        duration: 1000,
                        onLoad: { duration: 1000 }
                    }}
                    style={{
                        data : {
                            stroke : Colors.tertiary
                        },
                        parent : {
                            border : "1px solid #ccc"
                        },
                    }}
                    data={dummy}
                />
                <VictoryLine 
                    animate={{
                        duration: 1000,
                        onLoad: { duration: 1000 }
                    }}
                    style={{
                        data : {
                            stroke : Colors.error
                        },
                        parent : {
                            border : "1px solid #ccc"
                        },
                    }}
                    data={dummy1}
                />
                <VictoryScatter
                    data={dummy1}
                    size={5}
                    style={{
                        data : {
                            fill : Colors.error
                        }
                    }}
                />
                <VictoryScatter
                    data={dummy}
                    size={5}
                    style={{
                        data : {
                            fill : Colors.primary
                        }
                    }}
                />
            </VictoryGroup>
            <VictoryAxis
                style={{
                    grid : {
                        stroke : 'transparent'
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
                        stroke : 'transparent'
                    }
                }}
            />
        </VictoryChart>
    )
}

export default RainfallChart;

const dummy =[
    {x: "JAN", y: 30},
    {x: "FEB", y: 34},
    {x: "MAR", y: 19},
    {x: "APR", y: 18},
    {x: "MAY", y: 22},
    {x: "JUN", y: 23},
    {x: "JUL", y: 19},
    {x: "AUG", y: 19},
    {x: "SEP", y: 25},
    {x: "OCT", y: 26},
    {x: "NOV", y: 32},
    {x: "DEC", y: 31}
];

const dummy1 =[
    {x: "JAN", y: 31},
    {x: "FEB", y: 24},
    {x: "MAR", y: 29},
    {x: "APR", y: 13},
    {x: "MAY", y: 23},
    {x: "JUN", y: 23},
    {x: "JUL", y: 11},
    {x: "AUG", y: 15},
    {x: "SEP", y: 40},
    {x: "OCT", y: 14},
    {x: "NOV", y: 26},
    {x: "DEC", y: 31}
];