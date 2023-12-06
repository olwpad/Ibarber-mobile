import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { iniciar } from '../../Functions/funciones';
const IniciarSesion = ({ setIsAuthenticated }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const manejador = async () => {
    const isAuthenticated = await iniciar({ usuario, password });
    if (isAuthenticated) {
      navigation.navigate('list');
    }
  };
  

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Iniciar Sesión</Text>
      <TextInput
        label="Usuario"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button mode="contained" onPress={manejador} style={{ marginTop: 16 }}>
        Iniciar Sesión
      </Button>
      <View style={{ marginTop: 16 }}>
        <Text>
          ¿Tienes problemas?{' '}
          <Text onPress={() => navigation.navigate('Recuperar')}>Recuperar Cuenta</Text>
        </Text>
      </View>
    </View>
  );
};

export default IniciarSesion;
