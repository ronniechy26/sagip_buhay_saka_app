import React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import { Badge } from 'react-native-paper';
import { Colors, Fonts } from '../theme';

const Legend : React.FC = () => {
    return (
        <View style={styles.containter}>
            <View style={styles.upperContainer}>
               <View style={styles.flexRow}>
                    <Badge size={12} style={{backgroundColor : Colors.normal_data}} />
                    <Text style={styles.text}> Normal </Text>
               </View>
               <View style={styles.flexRow}>
                    <Badge size={12} style={{backgroundColor : Colors.el_nino }} />
                    <Text style={styles.text}> El Nino </Text>
               </View>
               <View style={styles.flexRow}>
                    <Badge size={12} style={{backgroundColor : Colors.la_nina }} />
                    <Text style={styles.text}> La Nina </Text>
               </View>
               <View style={{ flexDirection : 'row'}}>
                    <Badge size={12} style={{backgroundColor : Colors.forecast }} />
                    <Text style={styles.text}> Forecast </Text>
               </View>
            </View>
            <View style={styles.lowerContainer}>
               <View style={styles.flexRow}>
                    <Badge size={12} style={{backgroundColor : Colors.actual_year }} />
                    <Text style={styles.text}> Actual Year </Text>
               </View>
               <View style={{flexDirection : 'row', marginRight : 10}}>
                    <Badge size={12} style={{backgroundColor : Colors.projection_5050 }} />
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
