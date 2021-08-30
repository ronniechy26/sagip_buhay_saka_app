import React from 'react';
import { View, Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../drawer/DrawerContent'
import DrawerData, { IData } from '../drawer/DrawerData';
import { Colors } from '../theme';
// import { DrawerParamList } from '../types/NavigationTypes';

const Drawer = createDrawerNavigator();
function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
}
  
const DrawerScreen = () =>{
    return (
        <Drawer.Navigator
            useLegacyImplementation
            // screenOptions={{ 
            //   drawerActiveBackgroundColor: '#98da75', 
            //   drawerActiveTintColor: '#fff' 
            // }}
            initialRouteName="Dashboard"
            drawerContent={(props : any) => <DrawerContent {...props} />}
        >
            {
                DrawerData.map((item : IData, index) => {
                    return(
                        <Drawer.Screen 
                            key={index}
                            name={item.name}
                            component={Feed}
                            options={
                            {
                                drawerIcon : () => (
                                    <FontAwesome5 
                                        color={Colors.primary} 
                                        size={20} 
                                        name={item.iconName}
                                    />
                                )
                            }
                            }
                        />
                    )
                })
            }
        </Drawer.Navigator>
   );
}

export default DrawerScreen;