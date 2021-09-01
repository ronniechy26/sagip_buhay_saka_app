import  React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground , 
    Image,
    
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { Images, Colors } from '../theme';
  
type IDrawerContentProps = {
    logout : () => void;
} & DrawerContentComponentProps

const DrawerContent : React.FC<IDrawerContentProps> =  ({logout, ...rest}) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...rest}>
                <View>
                    <ImageBackground
                        source={Images.DrawerImg}
                        style={{ width: undefined, padding: 16, paddingTop: 48 }}
                        blurRadius={5}
                    >
                        <Image source={Images.ProfileImg} style={styles.profile} />
                        <Text style={styles.name}>Ronnie Chy</Text>

                        <View style={{ flexDirection: "row", justifyContent : 'space-between', marginRight : 20}}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.followers}>734 Recipients</Text>
                                <FontAwesome5 name="users" size={16} color="rgba(255, 255, 255, 0.8)" />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.followers}>123 Credits</Text>
                                <FontAwesome5 name="bitcoin" size={16} color="rgba(255, 255, 255, 0.8)" />
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styles.container}>
                        <DrawerItemList {...rest} />
                    </View>
                </View>
            </DrawerContentScrollView>
            <DrawerItem
                onPress={() => {
                    logout();
                }}
                label="Logout"
                icon={() => (
                    <MaterialIcons name="logout" color={Colors.primary} size={20} />
                )}
            />
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    followers: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 13,
        marginRight: 4
    }
  });