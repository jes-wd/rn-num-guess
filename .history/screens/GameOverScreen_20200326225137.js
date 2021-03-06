import React from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen} >
      <BodyText>This is Game Over! Cunt!</BodyText>
      <Image style={styles.image} source={require('../assets/images/success.png')} />
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
  },
  image: {
    width: '80%',
    height: 300
  }
});

export default GameOverScreen;