import React from 'react';
import {StyleSheet, View} from 'react-native';

const Container = ({children, style, ...props}) => (
  <View style={[styles.container, style]} {...props}>
    {children}
  </View>
);

export default Container;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 30,
  },
});
