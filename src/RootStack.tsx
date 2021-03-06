import React, { useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Axios from 'axios';

import AuthStackScreen  from "./stacks/AuthStackScreen";
import DrawerScreen from './stacks/DrawerScreen';
import { RootStackParamList } from './types/NavigationTypes';
import { IState } from "./reducers/RootReducer";
import { asyncActions } from './reducers/UserReducer';
import { getData } from "./libraries/asyncStorage";

const RootStack = createNativeStackNavigator<RootStackParamList>();

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> ;

const RootStackScreen : React.FC<IProps> = (props) => {
    const [token, setToken] = useState<string|null>('');
    const [userId, setUserId] = useState<string|null>('');
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        async function load(){
            const tempToken = await getData(process.env.STORAGE_KEY_AUTH!);
            setToken(tempToken);
            const tempUserId = await getData(process.env.STORAGE_KEY_USER!);
            setUserId(tempUserId);
        }
        load();
    }, [ props.data ] );

    useEffect(() => {
        if (token) {
            Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, [props.data, token]);

    useEffect(() =>{
        if(!props.data && token && userId) {
            props.fetch_user(userId);
        }
    }, [props.fetch_user, props.data , token, userId]);

    useEffect(() => {
        if(props.data && userId && token){
            setIsSignedIn(true);
        }else{
            setIsSignedIn(false);
        }
    }, [props.data, userId, token])

    return(
        <NavigationContainer>
            <RootStack.Navigator 
                initialRouteName="Auth"
                screenOptions={{
                    headerShown : false
                }}
            >
                {
                    isSignedIn ? (
                        <RootStack.Screen
                            name="Home"
                            component={DrawerScreen}
                        />
                    )
                    :
                    (
                        <RootStack.Screen
                            name="Auth"
                            component={AuthStackScreen}
                        />
                    )
                }
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
  
const mapStateToProps = (state: IState) => ({
    data: state.UserReducer.data_user,
});
  
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            fetch_user : asyncActions.fetch_user
        },
    dispatch
);
  
export default connect(mapStateToProps, mapDispatchToProps)(RootStackScreen);
