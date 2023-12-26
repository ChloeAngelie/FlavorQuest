import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text as RNText, Image } from 'react-native';
import {TextInput, Button } from 'react-native-paper';


const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const [showPass, setShowPass] = React.useState(false);

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      navigation.navigate('Home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
    <Image source={require('../logo/FlavorQuest_Logo.png')} style={styles.image}/>

      <TextInput 
        placeholder="" 
        label="Username"
        mode="outlined" 
        theme={{ colors: 
                 { placeholder: '#FF914D', 
                   text: '#FF914D', 
                   primary: '#FF914D', 
                   background: 'white'}
              }}
        value={username} 
        onChangeText={(text) => setUsername(text)}
        style={styles.input}/>

      <TextInput 
        placeholder="" 
        label="Password" 
        mode="outlined"
        theme={{ colors: 
                 { placeholder: '#FF914D', 
                   text: '#FF914D', 
                   primary: '#FF914D', 
                   background: 'white'}
              }}
        value={password} 
        secureTextEntry={!showPass}
        onChangeText= {setPassword}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            style={{ marginTop: 15 }}
            onPress={() => setShowPass(!showPass)}/>
              }
        style={styles.input}/> 

      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('HomePage')} 
        style={styles.button}>

      <RNText style={styles.buttonText}>LOGIN</RNText>
      </Button>

      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <RNText style={styles.text}>Don't have an account?</RNText>

          <TouchableOpacity onPress={() => navigation.navigate('RegistrationPage')}>
            <RNText style={styles.linkText}>Sign Up</RNText> 
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  image: {
    width: 400, 
    height: 600,
    resizeMode: 'contain',
    margin:-180,
  },

  input: {
    height: 40,
    width: 300,
    marginBottom: 15,
  },

  button: {
    marginTop: 30,
    marginBottom: 15,
    width: 160,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FF914D',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  text: {
    marginTop: 5,
    color: '#FF914D',
    marginRight: 3,
  },

  linkText: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#FF914D',
    marginRight: 14,
  },
});


export default LoginPage;
