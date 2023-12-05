import { View, Text, TextInput, Button } from 'react-native';
import { API_URLS } from '../../modulos/urls';
import { enviador } from '../../Functions/usePost';
import { useNavigation } from '@react-navigation/native';

export const RecuperarScreen = () => {
  const { formState, funcion } = useForm({
    email: '',
  });

  const { email } = formState;

  const manejador = async () => {
    const confirmacion = await mostrarConfirmacion(
      '¿Enviar datos?',
      '¿Estás seguro de que deseas enviar los datos?'
    );

    if (confirmacion.isConfirmed) {
      await enviador(API_URLS.RECUPERAR, { email });
    }
  };

  return (
    <View>
      <View>
        <Text>Olvidé mis datos de acceso</Text>
      </View>
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => funcion({ target: { name: 'email', value: text } })}
        />
      </View>
      <View>
        <Button title="Enviar" onPress={manejador} />
      </View>
      <View>
        <Text>Te enviaremos una nueva contraseña y tu nombre de usuario</Text>
      </View>
    </View>
  );
};

export default RecuperarScreen;