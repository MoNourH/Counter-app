import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  // Öka siffran
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Minska siffran men tillåt inte mindre än 0
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Nollställ siffran
  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonRow}>
        <Button title="PLUS" onPress={increaseCount} />
        <Button title="MINUS" onPress={decreaseCount} />
      </View>

      {/* Visar RESET-knappen bara om count är större än 0 */}
      {count > 0 && (
        <View style={styles.resetButton}>
          <Button title="RESET" onPress={resetCount} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counter: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  resetButton: {
    marginTop: 50,
  },
});

export default CounterApp;
