import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacity,
} from 'react-native';
import AppText from '../../constants/AppText';
import Icon from 'react-native-vector-icons/dist/Fontisto';

const Spinner = ({isError, onPress}) => {
  const errMsg = isError ? 'No Internet Connection' : 'Please wait few seconds';
  const refresh = isError && (
    <TouchableOpacity style={styles.reloadBtn} onPress={onPress}>
      <Icon name="cloud-refresh" size={25} color="#f35" />
    </TouchableOpacity>
  );
  return (
    <View style={styles.view}>
      <ActivityIndicator color="#f36" size={60} />
      <AppText style={styles.msg}>{errMsg}</AppText>
      {refresh}
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    marginTop: 10,
    fontSize: 15,
    color: '#bbb',
  },
  reloadBtn: {
    position: 'absolute',
    bottom: 35,
    right: '-22%',
    zIndex: 3,
    // width: 50,
    // height: 50,
    padding: 12,
    borderRadius: 100,
    backgroundColor: '#fafafa',
    // justifyContent: 'center',
    textAlign: 'center',
    // alignItems: 'center',
  },
});
