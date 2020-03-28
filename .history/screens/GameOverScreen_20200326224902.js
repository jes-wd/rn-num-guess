import React from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen} >
      <BodyText>This is Game Over! Cunt!</BodyText>
      <Image source={require('../assets/images/success.png')} />
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
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