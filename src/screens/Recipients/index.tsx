import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {

}

const Recipient : React.FC<IProps> = () =>{

    return(
        <View style={styles.container}>
            <Text> Reciepient </Text>
        </View>
    )
}

export default Recipient;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }

})