import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStackScreen  from "./stacks/AuthStackScreen";
import DrawerScreen from './stacks/DrawerScreen';
import { RootStackParamList } from './types/NavigationTypes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackScreen = () => (
  <RootStack.Navigator 
    initialRouteName="Auth"
    screenOptions={{
        headerShown : false
    }}
  >
        <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
        />
        <RootStack.Screen
            name="Home"
            component={DrawerScreen}
        />
  </RootStack.Navigator>
);

export default () => {
    return (
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    )
}

