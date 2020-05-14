import React from 'react';
import {StyleSheet, View} from 'react-native';

const Layout = ({children}) => {
  return <View style={styles.screen}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontFamily: 'Ubuntu-Regular',
  },
});
