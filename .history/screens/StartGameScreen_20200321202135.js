import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={styles.screen} >
      <Text>The game screen!</Text>
      <View>
        <Text>Select a number</Text>
        <TextInput />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
});

export default StartGameScreen;