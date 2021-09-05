import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {

}

const Advisories : React.FC<IProps> = () =>{

    return(
        <View style={styles.container}>
            <Text> Advisories </Text>
        </View>
    )
}

export default Advisories;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }

})