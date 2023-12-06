import { View, Text, TextInput, Button } from 'react-native';
import { useForm } from '../../Hooks/useform';
// import { API_URLS } from '../../modulos/urls';
// import { enviador } from '../../Functions/usePost';
import { useNavigation } from '@react-navigation/native';

export const RecuperarScreen = () => {
  const { formState, funcion } = useForm({
    email: '',
  });

  const { email } = formState;

  const manejador = async () => {
    //Alertas
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