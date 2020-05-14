import React from 'react';
import Loader from '../../assets/images/Loader.svg';
import {View, StyleSheet} from 'react-native';

const SvgSpinner = () => (
  <View style={styles.spin}>
    <Loader width={180} height={180} />
  </View>
);

export default SvgSpinner;
const styles = StyleSheet.create({
  spin: {
    marginVertical: 10,
  },
});
