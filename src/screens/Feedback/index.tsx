import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {

}

const Feedback : React.FC<IProps> = () =>{

    return(
        <View style={styles.container}>
            <Text> Feedback </Text>
        </View>
    )
}

export default Feedback;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }

})