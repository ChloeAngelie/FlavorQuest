import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';


const RegistrationPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const [showPass, setShowPass] = React.useState(false);

  return (
    <View style={styles.container}>
            <Image source={require('../logo/FlavorQuest_Logo.png')} style={styles.image}/>
            
            <TextInput 
              placeholder="" 
              label="First Name"
              mode="outlined" 
              theme={{ colors: 
                      { placeholder: '#FF914D', 
                        text: '#FF914D', 
                        primary: '#FF914D', 
                        background: 'white'}
                    }} 
              value={firstName} 
              onChangeText={(text) => setFirstName(text)}
              style={styles.input}/>

            <TextInput
              placeholder=""  
              label="Last Name"
              mode="outlined" 
              theme={{ colors: 
                      { placeholder: '#FF914D', 
                        text: '#FF914D', 
                        primary: '#FF914D', 
                        background: 'white'}
                    }} 
              value={LastName} 
              onChangeText={(text) => setLastName(text)}
              style={styles.input}/>

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
              onPress={() => 
              navigation.navigate('LoginPage')} 
              style={styles.button}>SIGNUP
            </Button>

            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <Text style={styles.text}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
              <Text style={styles.linkText}>Log In</Text> 
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
    margin:-170,
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
    fontSize: 18,
    fontWeight: 'bold',
  },

  
  input: {
    height: 40,
    width: 300,
    marginBottom: 15,
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


export default RegistrationPage;

