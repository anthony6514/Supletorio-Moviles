
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const Screen1 = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View>
      <Text>¡Bienvenido a la evaluación!</Text>
      <View>
        <Button
          title="Ir a Productos"
          onPress={() => navigation.navigate('Products')}
        />
        <Button
          title="Ir al Contador" 
          onPress={() => navigation.navigate('Counter')}
        />
      </View>
    </View>
  );
};
export default Screen1;
