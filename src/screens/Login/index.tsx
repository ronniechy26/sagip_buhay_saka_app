import React from 'react';
import { 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  Keyboard,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';


import { Images } from '../../theme';
import { ILogin } from '../../models/LoginModel';
import { RootStackParamList } from '../../types/NavigationTypes';
import LoginForm from './components/LoginForm';

export interface ILoginProps {
  navigation : NativeStackNavigationProp<RootStackParamList, 'Auth'>
}

const App: React.FC<ILoginProps> = (props) => {

  console.log(props)
  const handleLogin = (e : ILogin ) =>{
    console.log(e);
    props.navigation.navigate('Home');
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

export default App;

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
