import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import DrawerContent from '../drawer/DrawerContent'
import DrawerData, { IData } from '../drawer/DrawerData';
import { Colors, Fonts } from '../theme';
import { IState } from '../reducers/rootReducer';
import { syncActions } from '../reducers/UserReducer'
import { removeDatas } from '../libraries/asyncStorage';
// import { DrawerParamList } from '../types/NavigationTypes';

const Drawer = createDrawerNavigator();

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> ;
  
const DrawerScreen: React.FC<IProps> = ({
    logout
}) =>{

    const logoutAction = async () => {
        await removeDatas([
            process.env.STORAGE_KEY_AUTH!,
            process.env.STORAGE_KEY_USER!
        ]);
        logout();
    }

    return (
        <Drawer.Navigator
            useLegacyImplementation
            screenOptions={{ 
                // drawerActiveBackgroundColor: Colors.tertiary, 
                // drawerActiveTintColor: Colors.white,
                drawerInactiveTintColor : Colors.darkGray,
                drawerLabelStyle : {
                    fontFamily : Fonts.BOLD, 
                }
            }}
            initialRouteName="Dashboard"
            drawerContent={(props : DrawerContentComponentProps) => {
                return(
                    <DrawerContent 
                        {...props} 
                        logout={logoutAction}
                     />
                )
            }}
        >
            {
                DrawerData.map((item : IData, index) => {
                    return(
                        <Drawer.Screen 
                            key={index}
                            name={item.name}
                            component={item.component}
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

const mapStateToProps = (state: IState) => ({
    
});
  
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            logout : syncActions.logout
        },
    dispatch
);
  
export default connect(mapStateToProps, mapDispatchToProps)(DrawerScreen);
