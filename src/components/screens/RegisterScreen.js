import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { enviador } from '../../Functions/usePost';
import { API_URLS } from '../../modulos/urls';
import { useNavigation } from '@react-navigation/native';

function Registrar() {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const manejador = async () => {
    const respuesta = await enviador(API_URLS.Registrar, { nombres, apellidos, usuario, password, email });
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Regístrate</Text>
      <TextInput
        label="Nombres"
        value={nombres}
        onChangeText={(text) => setNombres(text)}
      />
      <TextInput
        label="Apellidos"
        value={apellidos}
        onChangeText={(text) => setApellidos(text)}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Username"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />
      <TextInput
        label="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button mode="contained" onPress={manejador} style={{ marginTop: 16 }}>
        Regístrame
      </Button>
      <Text style={{ marginTop: 16 }}>
        ¿Ya tienes cuenta?{' '}
        <Text onPress={() => navigation.navigate('Login')}>Inicia sesión</Text>
      </Text>
    </View>
  );
}

export default Registrar;
