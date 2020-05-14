import React from 'react';
import {StyleSheet, View} from 'react-native';

const Block = ({style, color, ...props}) => {
  return (
    <View style={[styles.block, style, {backgroundColor: color}]} {...props} />
  );
};

export default Block;

const styles = StyleSheet.create({
  block: {
    height: 10,
    width: 10,
    marginRight: 10,
  },
});
