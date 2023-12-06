import { View, Text} from 'react-native';
import { useForm } from '../../Hooks/useform';
// import { API_URLS } from '../../modulos/urls';
// import { enviador } from '../../Functions/usePost';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';


export const RecuperarScreen = () => {
  const { formState, funcion } = useForm({
    email: '',
  });

  const { email } = formState;

  const manejador = async () => {
    //Alertas
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Recuperar Cuenta</Text>
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
        <Button mode="contained" onPress={manejador} style={{ marginTop: 16 }}> Enviar </Button>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text>Te enviaremos una nueva contraseña y tu nombre de usuario</Text>
      </View>
    </View>
  );
};

export default RecuperarScreen;