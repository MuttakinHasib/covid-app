import React from 'react';
import {StyleSheet, View} from 'react-native';

const Row = ({children, style, ...props}) => (
  <View style={[styles.row, style]} {...props}>
    {children}
  </View>
);

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
});
