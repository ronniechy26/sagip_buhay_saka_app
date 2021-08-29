import React from 'react';
import { 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  Keyboard,
  TextInput
} from 'react-native';
import { Formik } from 'formik';


import { Images } from '../../theme/Images';
import { Colors } from '../../theme/Colors';
import { LoginSchema } from '../../models/LoginModel'
import { globalStyles } from '../../theme/GlobalStyles';

export default function App() {

  const handleLogin = (e :any ) =>{
    console.log(e);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image source ={Images.LoginImg}
          style={{width:"100%",height:"40%"}}
        />
        <Text style={styles.title} >Sagip Buhay Saka</Text>
        <Text style={styles.description}>
          Sagip Buhay at Saka is a short messaging service (sms) 
          designed to communicate climate-based warnings to farmers, 
          fishers and other community members.     
        </Text>

        <Formik
          initialValues={{email : '', password : ''}}
          onSubmit={handleLogin}
          validationSchema={LoginSchema}
        >
          {(props) =>(
            <>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={[
                    styles.textInput, 
                    props.touched.email && props.errors.email ? {
                      borderColor : Colors.error
                    } : {}
                  ]}  
                  placeholder="Email"
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  onBlur={props.handleBlur('email')}
                />
                <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                <TextInput 
                  style={[
                    styles.textInput, 
                    props.touched.email && props.errors.email ? {
                      borderColor : Colors.error
                    } : {}
                  ]} 
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  onBlur={props.handleBlur('password')} 
                />
                <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
              </View>
              <TouchableOpacity onPress={() => props.handleSubmit()}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
              </TouchableOpacity>
           </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

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
  buttonContainer : {
    height : 50,
    marginHorizontal:55,
    alignItems:"center",
    justifyContent:"center",
    marginTop:15,
    backgroundColor: Colors.primary,
    paddingVertical:10,
    borderRadius:23,
  },
  buttonText : {
    color:Colors.white,
    fontFamily:"nunito-bold",
    fontSize : 18
  },
  inputContainer : {
    marginHorizontal:55,
    marginTop:10,
    marginBottom : 5,
  },
  textInput : {
    fontFamily : "nunito-semibold",
    color: Colors.black,
    borderColor : Colors.primary,
    borderRadius : 10,
    borderWidth : 1,
    padding : 8,
    fontSize : 16,
    marginTop : 5
  },
});
