import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Screen1';
import ProductsScreen from '../screens/Screen2';
import CounterScreen from '../screens/Screen3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Evaluación' }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Productos' }} />
        <Stack.Screen name="Counter" component={CounterScreen} options={{ title: 'Contador' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
