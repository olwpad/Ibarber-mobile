import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function Registrar() {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const manejador = async () => {
  }

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
