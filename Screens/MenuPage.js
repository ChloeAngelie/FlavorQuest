import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const Menu = ({ navigation }) => {
  
  const handleRegularLogin = () => {
    navigation.navigate('LoginPage');
  };

  const guestLogin = () => {
    navigation.navigate('HomePage');
  };

 

  return (
    <View style={styles.container}>
        <Image source={require('../logo/FlavorQuest_Logo.png')} style={styles.image}/>
        <TouchableOpacity style={styles.button} onPress={handleRegularLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

          {/* <GoogleSigninButton
            style={styles.googleButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={googleLogin} /> */}

          <TouchableOpacity style={styles.button} onPress={guestLogin}>
            <Text style={styles.buttonText}>GUEST</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  image: {
    width: 400,
    height: 600,
    resizeMode: 'contain',
    margin:-200, 
  },

  button: {
    padding:20,
    margin:10,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FF914D',
  },

  backButton: {
    backgroundColor: '#FF914D',
    padding: 10,
    marginBottom: 10,
    width: 110,
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /*googleButton: {
    width: 192,
    height: 48,
    marginTop: 20, 
  },*/
});

export default Menu;
