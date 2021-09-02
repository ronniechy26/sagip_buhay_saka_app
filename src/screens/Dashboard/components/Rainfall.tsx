import React from 'react';
import { View, StyleSheet  } from 'react-native';


import { Colors, Images,  } from '../../../theme';
import CardIcon from '../../../components/CardIcon';
import Legend from '../../../components/Legend';
import RainfallChart from './RainfallChart';


const Rainfall : React.FC = () => {
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
            <View style={{marginTop : -35}}>
                <RainfallChart/>
                <Legend/>
            </View>
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
