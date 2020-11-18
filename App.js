import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold')
  });
};

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
