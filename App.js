import { StyleSheet } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IniciarSesion from './src/components/screens/LoginScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import RegisterScreen from './src/components/screens/RegisterScreen';
import RecuperarScreen from './src/components/screens/RecuperarScreen';
import BarberShop from './src/components/screens/list';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={IniciarSesion} />
        <Stack.Screen name="Recuperar" component={RecuperarScreen} />
        <Stack.Screen name="list" component={BarberShop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
