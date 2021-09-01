import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput,
  Platform
} from 'react-native';
import { Formik } from 'formik';
import * as Animatable from 'react-native-animatable';
import { FontAwesome, Feather } from '@expo/vector-icons'; 


import { Colors, Fonts, GlobalStyles } from '../../../theme';
import { LoginSchema, ILogin } from '../../../models/LoginModel';

interface ILoginFormProps {
    handleLogin : ( data : ILogin) => void;
}

const LoginForm : React.FC<ILoginFormProps> = ({
    handleLogin,
}) =>{
    const [showPassword, setShowPassword] = useState(false);

    return(
        <Formik
            initialValues={{email : '', password : ''}}
            onSubmit={handleLogin}
            validationSchema={LoginSchema}
        >
            {(props) =>(
            <>
                <Animatable.View animation="fadeInUpBig" style={styles.inputContainer}>
                    <Text style={{color : Colors.primary, fontWeight : 'bold'}}>Email</Text>
                    <View 
                        style={[
                            styles.textInputContainer, 
                            props.touched.email && props.errors.email ? {
                            borderBottomColor : Colors.error
                            } : {}]
                        }
                    >
                        <FontAwesome 
                            name="user"
                            color={Colors.primary}
                            style={{fontWeight : 'bold', marginRight : 5}}
                            size={20}
                        />
                        <TextInput 
                            style={[  styles.textInput ]}  
                            autoCompleteType="email"
                            placeholder="Email"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')}
                            />
                    </View>
                    <Text style={GlobalStyles.errorText}>
                        {props.touched.email && props.errors.email}
                    </Text>

                    <Text style={{color : Colors.primary, fontWeight : 'bold'}}>Password</Text>
                    <View 
                        style={[
                            styles.textInputContainer, 
                            props.touched.password && props.errors.password ? {
                            borderBottomColor : Colors.error
                            } : {}]
                        }
                    >
                        <FontAwesome 
                            name="lock"
                            color={Colors.primary}
                            style={{fontWeight : 'bold', marginRight : 5}}
                            size={20}
                        />
                        <TextInput 
                            style={[  styles.textInput ]}  
                            autoCompleteType="password"
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            onBlur={props.handleBlur('password')} 
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            { !showPassword ? 
                            <Feather 
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather 
                                name="eye"
                                color="grey"
                                size={20}
                            />
                            }
                        </TouchableOpacity>
                    </View>
                    <Text style={GlobalStyles.errorText}>
                        {props.touched.password && props.errors.password}
                    </Text>
                </Animatable.View>

                <TouchableOpacity onPress={() => props.handleSubmit()}>
                    <Animatable.View animation="fadeInUpBig" style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </>
        )}
      </Formik>
    )
}

export default LoginForm;

const styles = StyleSheet.create({
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
      fontFamily: Fonts.BOLD,
      fontSize : 18
    },
    inputContainer : {
      marginHorizontal:55,
      marginTop:20,
      marginBottom : 5,
    },
    textInput : {
      fontFamily : Fonts.REGULAR,
      padding : 8,
      fontSize : 14,
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
    textInputContainer: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: Colors.primary,
      paddingBottom: 5
    },
  });
  