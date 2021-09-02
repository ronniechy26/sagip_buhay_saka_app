import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Rainfall from './components/Rainfall';

const Dashboard : React.FC = () => {
    return (
        <View style={styles.containter}> 
            <ScrollView>
                <Rainfall/>
                <Rainfall/>
                <Rainfall/>
                <Rainfall/>
            </ScrollView>
        </View>
    )
}

export default Dashboard;

const styles= StyleSheet.create({
    containter : {
        flex : 1
    }
})
