import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StleSheet.create({
  header: {
    width: '100%',
    height: 
  }
});

export default Header;