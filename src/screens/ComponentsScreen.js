import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  let myName = 'Lucas';

  return (
    <View>
      <Text style={styles.titleSize}>Geeting started with React Native!</Text>
      <Text style={styles.greeting}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSize: {
    fontSize: 45,
  },
  greeting: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
