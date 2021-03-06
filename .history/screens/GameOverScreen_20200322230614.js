import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen} >
      <Text>The Game is Over! Cunt!</Text>
      <Text>Number of rounds: {props.userNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;