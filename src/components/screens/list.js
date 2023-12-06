import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useFetch } from '../../Hooks/useFetch';
import { API_URLS } from '../../modulos/urls';
import BarberoCard from './BarberoCard';
import BarberiaCard from './BarberiaCard';

const BarberShop = () => {
  const apiUrlBarberias = API_URLS.obtenerBarberias;
  const { data: barberiasData, hasError: hasErrorBarberias, isLoading: isLoadingBarberias } = useFetch(apiUrlBarberias);

  const apiUrlBarberos = API_URLS.obtenerBarberosAll;
  const { data: barberosData, hasError: hasErrorBarberos, isLoading: isLoadingBarberos } = useFetch(apiUrlBarberos);

  if (isLoadingBarberias || isLoadingBarberos) {
    return <Text>Loading...</Text>;
  }

  if (hasErrorBarberias || hasErrorBarberos) {
    return <Text>Please try again later.</Text>;
  }

  return (
    <View style={styles.cuerpo}>
      <Text style={styles.titleUser}>Hola</Text>
      <View style={styles.contCartas}>
        {/* Barberias Section */}
        <View style={styles.barberias}>
          <Text>Barberias:</Text>
          <FlatList
            data={barberiasData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <BarberiaCard name={item.nombre_barberia} description={item.descripcion_barberia} />
            )}
          />
          <TouchableOpacity style={styles.verMasBtn}>
            <Text>Ver más</Text>
          </TouchableOpacity>
        </View>

        {/* Barberos Section */}
        <View style={styles.barberos}>
          <Text>Barberos:</Text>
          <FlatList
            data={barberosData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                {item.barberos.map((barbero, subIndex) => (
                  <BarberoCard key={subIndex} name={barbero.usuario} biography={barbero.biografia_barbero} />
                ))}
              </View>
            )}
          />
          <TouchableOpacity style={styles.verMasBtn}>
            <Text>Ver más</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cuerpo: {
    padding: 16,
  },
  titleUser: {
    fontSize: 24,
    marginBottom: 16,
  },
  contCartas: {
    flexDirection: 'row',
  },
  barberias: {
    flex: 1,
    marginRight: 8,
  },
  barberos: {
    flex: 1,
    marginLeft: 8,
  },
  verMasBtn: {
    marginTop: 16,
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default BarberShop;

