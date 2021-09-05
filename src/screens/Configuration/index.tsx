import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {

}

const Configuration : React.FC<IProps> = () =>{

    return(
        <View style={styles.container}>
            <Text> Configuration </Text>
        </View>
    )
}

export default Configuration;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }

})