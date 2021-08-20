import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Enter your name:</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
      />
      <Text>Yourname is {name}</Text>
      {name.length < 5 && (
        <Text style={styles.error}>
          Name must be at least 5 characters long
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default TextScreen;
