import React from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import AppText from '../../constants/AppText';

const HeaderLogo = () => {
  const corona = '../../assets/images/corona.png';
  return (
    <View style={styles.logo}>
      <Image
        style={styles.logoImg}
        source={require(corona)}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View>
        <AppText style={styles.logoText}>Covid-19</AppText>
        <AppText style={styles.logoTextSmall}>corona virus</AppText>
      </View>
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImg: {
    width: 50,
    height: 50,
  },
  logoText: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
  },
  logoTextSmall: {
    fontSize: 12,
    letterSpacing: 1.5,
    fontFamily: 'Ubuntu-Light',
  },
});
