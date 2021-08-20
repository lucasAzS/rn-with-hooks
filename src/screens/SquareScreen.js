import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SquareScreen = () => {
  const [red, setRed] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  const [green, setGreen] = React.useState(0);

  return (
    <View>
      <Text style={styles.textStyle}>Red Amount:{red} </Text>
      <Button
        title='More Red'
        onPress={() => {
          red < 255 ? setRed(red + 15) : setRed(0);
        }}
      />
      <Button
        title='Less Red'
        onPress={() => {
          red > 0 ? setRed(red - 15) : setRed(255);
        }}
      />
      <Text style={styles.textStyle}>Blue Amount:{blue} </Text>
      <Button
        title='MoreBlue'
        onPress={() => {
          blue < 255 ? setBlue(blue + 15) : setBlue(0);
        }}
      />
      <Button
        title='Less Blue'
        onPress={() => {
          blue > 0 ? setBlue(blue - 15) : setBlue(255);
        }}
      />
      <Text style={styles.textStyle}>Green Amount: {green} </Text>
      <Button
        title='More Green'
        onPress={() => {
          green < 255 ? setGreen(green + 15) : setGreen(0);
        }}
      />
      <Button
        title='Less Green'
        onPress={() => {
          green > 0 ? setGreen(green - 15) : setGreen(255);
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
