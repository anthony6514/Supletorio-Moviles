
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(5);

  return (
    <View>
      <Text>Acumulador</Text>
      <Text>{count}</Text>
      <View>
        <Button
          title="+5"
          onPress={() => setCount(count + 5)}
        />
        <View style={{ marginHorizontal: 10 }} />
        <Button
          title="-5"
          onPress={() => setCount(count - 5)}
        />
      </View>
    </View>
  );
};


export default CounterScreen;