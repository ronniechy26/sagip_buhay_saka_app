import React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import { Badge } from 'react-native-paper';
import { Colors, Fonts } from '../theme';

const Legend : React.FC = () => {
    return (
        <View style={styles.containter}>
            <View style={styles.upperContainer}>
               <View style={styles.flexRow}>
                    <Badge size={12} style={{backgroundColor : "rgb(152, 208, 255)" }} />
                    <Text style={styles.text}> Normal </Text>
               </View>
               <View style={styles.flexRow}>
                    <Badge size={12} style={{backgroundColor : "rgb(233, 68, 82)" }} />
                    <Text style={styles.text}> El Nino </Text>
               </View>
               <View style={styles.flexRow}>
                    <Badge size={12} style={{backgroundColor : "rgb(79, 108, 206)" }} />
                    <Text style={styles.text}> La Nina </Text>
               </View>
               <View style={{ flexDirection : 'row'}}>
                    <Badge size={12} style={{backgroundColor : "rgb(245, 73, 6)" }} />
                    <Text style={styles.text}> Forecast </Text>
               </View>
            </View>
            <View style={styles.lowerContainer}>
               <View style={styles.flexRow}>
                    <Badge size={12} style={{backgroundColor : "rgb(80, 233, 93)" }} />
                    <Text style={styles.text}> Actual Year </Text>
               </View>
               <View style={{flexDirection : 'row', marginRight : 10}}>
                    <Badge size={12} style={{backgroundColor : "rgb(129, 137, 143)" }} />
                    <Text style={styles.text}> Projection 2050 </Text>
               </View>
            </View>
        </View>
    )
}

export default Legend;

const styles= StyleSheet.create({
    containter : {
        flex : 1,
        marginTop : -15,
        marginBottom : 15
    },
    upperContainer : {
        flex : 1, 
        flexDirection : 'row', 
        justifyContent : 'space-around', 
        marginBottom : 5, 
        paddingLeft : 30, 
        paddingRight : 30
    },
    lowerContainer : {
        flexDirection : 'row', 
        justifyContent : 'space-evenly',
        paddingLeft : 35, 
        paddingRight : 35
    },
    flexRow : {
        flexDirection : 'row'
    },
    text : {
        fontFamily : Fonts.SEMI_BOLD, 
        color : Colors.darkGray,
        fontSize : 12,
    }
})
