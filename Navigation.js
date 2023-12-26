import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Screens/LandingPage';
import MenuPage from './Screens/MenuPage';
import LoginPage from './Screens/LoginPage';
import RegistrationPage from './Screens/RegistrationPage';
import HomePage from './Screens/HomePage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={MenuPage} options={{headerShown: false}}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} options={{headerShown: false}}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

