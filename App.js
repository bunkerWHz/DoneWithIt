import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello React HI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
