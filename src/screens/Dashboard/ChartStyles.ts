import { StyleSheet } from "react-native"
import { Colors } from "../../theme"

export const chartStyles = StyleSheet.create({
    containter : {
        flex : 1
    },
    Card : {
        margin : 10,
        backgroundColor : Colors.white,
        borderRadius : 12,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    header: {
        paddingTop : 5,
        paddingHorizontal :15
    }
})