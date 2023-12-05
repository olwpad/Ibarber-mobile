import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { enviador } from '../../Functions/usePost';
import { API_URLS } from '../../modulos/urls';

function Registrar() {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const manejador = async () => {
    try {
      const respuesta = await enviador(API_URLS.Registrar, {
        nombres,
        apellidos,
        usuario,
        password,
        email,
      });
  
      if (respuesta && respuesta.ok) {
        console.log('Registro exitoso');
        Alert.alert('Registro Exitoso', 'Tu cuenta ha sido registrada exitosamente.');
      } else {
        console.error('Error en el registro',error);
        Alert.alert('Error', 'Hubo un error en el registro. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error en la solicitud de registro:', error);
      Alert.alert('Error de Red', 'Hubo un error en la solicitud de registro. Por favor, verifica tu conexión a internet.');
    }
  };

  return (
    <View>
      <Text>Regístrate</Text>
      <TextInput
        placeholder="Nombres"
        value={nombres}
        onChangeText={(text) => setNombres(text)}
      />
      <TextInput
        placeholder="Apellidos"
        value={apellidos}
        onChangeText={(text) => setApellidos(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Username"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Regístrame" onPress={manejador} />
      <Text>
        ¿Ya tienes cuenta?{' '}
        <Text onPress={() => console.log('Navegar a Login')}>Inicia sesión</Text>
      </Text>
    </View>
  );
}

export default Registrar;
