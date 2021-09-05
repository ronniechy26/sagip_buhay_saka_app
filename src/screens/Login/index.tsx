import React, { useCallback } from 'react';
import { 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  Keyboard,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';

import { Colors, Fonts, Images } from '../../theme';
import { ILogin } from '../../models/LoginModel';
import { RootStackParamList } from '../../types/NavigationTypes';
import LoginForm from './components/LoginForm';
import { IState } from '../../reducers/rootReducer';
import { asyncActions } from '../../reducers/UserReducer';
import { getUserStatus } from '../../selectors/UserSelectors';

export type ILoginProps = {
  navigation : NativeStackNavigationProp<RootStackParamList, 'Auth'>
}

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & ILoginProps;

const App: React.FC<IProps> = (props) => {
  const loading_login = (props.status['USER_LOGIN'] ? props.status['USER_LOGIN'].fetching : false);
  const loading_fetch_user = (props.status['USER_FETCH_DATA'] ? props.status['USER_FETCH_DATA'].fetching : false);
 
  const handleLogin = useCallback(
    (data : ILogin) => {
      props.login({
        username : data.email,
        password : data.password
      });
    },
    [props.login],
  );

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Animatable.Image 
            animation="bounceIn" 
            source ={Images.LoginImg}
            style={{width:"100%", height:"35%"}}
          />
          <Animatable.Text 
            animation="slideInLeft" 
            style={styles.title} 
          >
            Sagip Buhay Saka
          </Animatable.Text>

          <Animatable.Text 
            animation="slideInRight"
            style={styles.description}
          >
            Sagip Buhay at Saka is a short messaging service (sms) 
            designed to communicate climate-based warnings to farmers, 
            fishers and other community members.     
          </Animatable.Text>

          <LoginForm
            handleLogin={handleLogin}
          />
        </View>
      </TouchableWithoutFeedback>
      <Spinner
        visible={loading_login || loading_fetch_user}
        color={Colors.primary}
      />
    </>
  );
}

const mapStateToProps = (state: IState) => ({
  data: state.UserReducer.data_user,
  status : getUserStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
  {
    login : asyncActions.login,
    fetch_user : asyncActions.fetch_user
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title : {
    fontSize:30,
    fontFamily:Fonts.SEMI_BOLD,
    alignSelf:"center",
  },
  description : {
    fontFamily:Fonts.SEMI_BOLD,
    marginHorizontal:55,
    textAlign:'center',
    marginTop:5,
    opacity:0.4
  }
});
