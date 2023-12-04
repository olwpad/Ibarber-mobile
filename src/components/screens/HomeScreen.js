import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default HomeScreen;
