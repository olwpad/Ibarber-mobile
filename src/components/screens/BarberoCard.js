import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BarberoCard = ({ name, biography }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.biography}>{biography}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  biography: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default BarberoCard;
