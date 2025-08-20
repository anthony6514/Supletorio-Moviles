import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../screens/Screen2';
import CounterScreen from '../screens/Screen3';
import Screen1 from '../screens/Screen1';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Screen1} options={{ title: 'Evaluación' }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Productos' }} />
        <Stack.Screen name="Counter" component={CounterScreen} options={{ title: 'Contador' }} />
      </Stack.Navigator>
  );
}
