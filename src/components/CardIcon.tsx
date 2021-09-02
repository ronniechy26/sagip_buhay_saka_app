import React from 'react';
import { View, StyleSheet, Image, Text, ImageSourcePropType } from 'react-native';
import { Colors } from '../theme';
import fonts from '../theme/Font';

interface IProps {
    icon : ImageSourcePropType;
    title : string;
}

const CardIcon : React.FC<IProps> = ({ icon, title }) => {
    return (
        <View style={styles.containter}>
            <Image
                source={icon}
                resizeMode="cover"
                style={styles.icon}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </View>
    )
}

export default CardIcon;

const styles= StyleSheet.create({
    containter : {
        flex : 1,
        flexDirection : 'row'
    },
    icon :{
        height : 40,
        width : 40,
        marginTop : 10
    },
    titleContainer : {
        marginTop : 20,
        marginHorizontal : 8
    },
    title : {
        fontFamily : fonts.BOLD,
        color : Colors.darkGray,
        fontSize : 16
    }
})
