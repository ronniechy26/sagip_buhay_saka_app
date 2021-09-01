import React from 'react';
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

import { Images } from '../../theme';
import { ILogin } from '../../models/LoginModel';
import { RootStackParamList } from '../../types/NavigationTypes';
import LoginForm from './components/LoginForm';
import { IState } from '../../reducers/rootReducer';
import { asyncActions } from '../../reducers/UserReducer';

export type ILoginProps = {
  navigation : NativeStackNavigationProp<RootStackParamList, 'Auth'>
}

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & ILoginProps;

const App: React.FC<IProps> = (props) => {

  const handleLogin = (data : ILogin ) =>{
    props.login({
      username : data.email,
      password : data.password
    });
  };

  return (
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
  );
}

const mapStateToProps = (state: IState) => ({
  data: state.UserReducer.data,
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
    fontFamily:"nunito-semibold",
    alignSelf:"center",
  },
  description : {
    fontFamily:"nunito-semibold",
    marginHorizontal:55,
    textAlign:'center',
    marginTop:5,
    opacity:0.4
  },
});
