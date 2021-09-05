import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {

}

const Users : React.FC<IProps> = () =>{

    return(
        <View style={styles.container}>
            <Text> Users </Text>
        </View>
    )
}

export default Users;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }

})