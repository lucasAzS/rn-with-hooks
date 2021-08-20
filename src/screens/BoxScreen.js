import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    borderWidth: 3,
    borderColor: 'red',
  },
  box1: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  box2: {
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'green',
    height: 100,
    width: 100,
    position: 'absolute',
    top: 100,
    left: 130,
  },
  box3: {
    borderWidth: 3,
    borderColor: 'blue',
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
