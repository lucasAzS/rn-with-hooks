import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'John', age: 25 },
    { name: 'Mary', age: 32 },
    { name: 'Mike', age: 32 },
    { name: 'Sara', age: 42 },
    { name: 'Alex', age: 32 },
    { name: 'Bob', age: 42 },
  ];

  return (
    <FlatList
      keyExtractor={(_, index) => index}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View style={styles.listItem}>
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
