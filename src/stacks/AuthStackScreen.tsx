import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../screens/Login'

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            options={{
                headerShown : false
            }}
            name="Login"
            component={Login}
        />
    </AuthStack.Navigator>
  );

export default AuthStackScreen;