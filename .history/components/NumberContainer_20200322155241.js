import React from 'react';
import { Text, View } from 'react-native';
import Colors from '..constants/Colors';

const NumberContainer = props => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent
  }
});

export default NumberContainer;

