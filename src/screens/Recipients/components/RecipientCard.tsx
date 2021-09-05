import React, { useMemo} from 'react'
import { View, StyleSheet, Text , Animated, } from 'react-native'
import { Badge, Avatar } from 'react-native-paper';
import { startCase, toLower } from 'lodash';

import { IRecipient } from '../../../models/RecipientModel';
import { Colors, Fonts } from '../../../theme';

const ITEM_SIZE = 45 + 15 + 15 + 15 ;

interface IProps {
    item : IRecipient,
    index : number,
    scrollY : Animated.Value
}

const RecipientCard : React.FC<IProps> = (props) =>{

   const value = useMemo(()=>{
        return {
            item : props.item,
            index : props.index,
            scrollY : props.scrollY,
        }
    },[ props ])

    const inputRange = [
        -1, 
        0, 
        ITEM_SIZE *  value.index,
        ITEM_SIZE * (value.index + 2)
    ];

    const scale = value.scrollY.interpolate({
        inputRange,
        outputRange : [ 1,1,1,0 ],
    });

    const inputRangeOpacity = [
        -1, 
        0, 
        ITEM_SIZE *  value.index,
        ITEM_SIZE * (value.index + .5)
    ];

    const opacity = value.scrollY.interpolate({
        inputRange : inputRangeOpacity,
        outputRange : [ 1,1,1,0 ],
    });

    return(
        <Animated.View 
            style={[
                styles.container, 
                styles.shadow,
                {
                    transform : [{ scale }],
                    opacity
                }
            ]}
        >
            <View style={{flexDirection : 'row'}}>
                <View style={{marginRight : 10}}>
                    <Avatar.Text size={45} 
                        label={`${value.item.first_name.charAt(0)}${value.item.last_name.charAt(0)}`} 
                        labelStyle={{
                            fontFamily : Fonts.SEMI_BOLD,
                        }}
                        style={{
                            backgroundColor : Colors.tertiary
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.name}>
                        {`${startCase(toLower(value.item.first_name))} ${startCase(toLower(value.item.last_name)) }`}
                    </Text>
                    <Text style={styles.contact_number}>
                        {`+63${value.item.contact_number}`}
                    </Text>
                </View>
                
            </View>
            <View>
                <Badge size={17} style={[{
                    backgroundColor : value.item.is_active ? Colors.actual_year : Colors.el_nino
                }]} />
            </View>
        </Animated.View>
    )
}

export default RecipientCard

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 15,
        marginBottom : 15,
        backgroundColor : 'rgb(255,255,255)',
        borderRadius : 12,
    },
    name : {
        fontFamily : Fonts.BOLD,
        fontSize : 18,
        color : Colors.primary
    },
    contact_number : {
        fontFamily : Fonts.SEMI_BOLD_ITALIC,
        color : Colors.darkGray
    },
    badgeStyle : {
    //    marginTop : 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width : 0,
            height : 10
        },
        shadowOpacity : 1,
        shadowRadius : 20,
        elevation: 8,
    },

})