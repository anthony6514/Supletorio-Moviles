
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const products = [
  { name: 'mouse', price: 50 },
  { name: 'laptop', price: 1500 },
  { name: 'teclado', price: 80 },
  { name: 'monitor', price: 120 },
];

const ProductsScreen = () => (
  <View>
    <Text>Lista de Productos</Text>
    
    <FlatList
    data={products} 
      keyExtractor={item => item.name} 
       renderItem={({item}) => ( 
        <View>
         <Text>{item.name}</Text>
          <Text>${item.price}</Text>
       </View>
      )}
    />
    <View>
      <Text>Valor total a pagar: ${products.reduce((sum, p) => sum + p.price, 0)}</Text>
  
     </View>
  </View>
);

export default ProductsScreen;
