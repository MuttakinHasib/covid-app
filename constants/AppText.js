import React from 'react';
import {Text, StyleSheet} from 'react-native';

const AppText = (props) => {
  return (
    <Text style={[styles.text, props.style]} {...props}>
      {props.children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Ubuntu-Regular',
  },
});
