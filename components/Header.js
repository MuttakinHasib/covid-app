import React from 'react';
import {StyleSheet, Linking, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import HeaderLogo from './Logo/HeaderLogo';
const Header = () => {
  const gitHub = <Icon name="github" size={35} solid />;
  const facebook = (
    <Icon name="facebook-messenger" color={'#1094F4'} size={35} solid />
  );

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <HeaderLogo />
        <View style={styles.socialLinks}>
          <Text onPress={() => Linking.openURL('https://m.me/hasibmolla28')}>
            {facebook}
          </Text>
          <Text
            onPress={() =>
              Linking.openURL('https://github.com/MuttakinHasib/')
            }>
            {gitHub}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 25,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  socialLinks: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
});
