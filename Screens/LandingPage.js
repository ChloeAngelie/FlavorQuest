import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function LandingPage ({ navigation }) {
  const handleRegularLogin = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
        <Image source={require('../logo/FlavorQuest_Logo.png')} style={styles.image}/>
        <TouchableOpacity style={styles.button} onPress={handleRegularLogin}>
              <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
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
    margin:-200,
  },

  button: {
    padding:20,
    margin:40,
    width: 160,
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
});


