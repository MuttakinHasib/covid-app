import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableNativeFeedback,
  Linking,
  ScrollView,
} from 'react-native';
import Container from '../../constants/Container';
import Row from '../../screen/Layout/Row';
import AppText from '../../constants/AppText';
import Icon from 'react-native-vector-icons/dist/Entypo';
import AntIcon from 'react-native-vector-icons/dist/AntDesign';
import FA from 'react-native-vector-icons/dist/FontAwesome5';

const Developer = () => {
  const hero = '../../assets/images/hasib.png';
  return (
    <ScrollView>
      <Container style={styles.container}>
        <View>
          <AppText style={styles.title}>About Developer</AppText>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#ddd')}
            onPress={() => Linking.openURL('https://fb.me/hasibmolla28/')}>
            <Row style={styles.card}>
              <Image style={styles.heroImg} source={require(hero)} />
              <View style={styles.heroInfo}>
                <AppText style={styles.name}>Hasib Molla</AppText>
                <AppText style={styles.position}>
                  Android & Web App Developer
                </AppText>
                <Row style={styles.locContainer}>
                  <Icon name="location-pin" color="#aaa" size={25} />
                  <AppText style={styles.location}>Kapasia, Gazipur</AppText>
                </Row>
              </View>
            </Row>
          </TouchableNativeFeedback>
          <View style={styles.card}>
            <AppText style={styles.contact}>Contact with me</AppText>
            <Row style={styles.iconContainer}>
              <AntIcon
                style={styles.icon}
                name="facebook-square"
                color="#0B86EE"
                size={30}
                onPress={() =>
                  Linking.openURL('https://facebook.com/hasibmolla28')
                }
              />
              <Icon
                style={styles.icon}
                name="mail"
                color="#003"
                size={38}
                onPress={() => Linking.openURL('mailto:hasibmolla28@gmail.com')}
              />
              <FA
                style={styles.icon}
                name="facebook-messenger"
                color="#1094F4"
                size={33}
                onPress={() => Linking.openURL('https://m.me/hasibmolla28/')}
              />
              <AntIcon
                style={styles.icon}
                name="github"
                color="#000"
                size={30}
                onPress={() =>
                  Linking.openURL('https://github.com/MuttakinHasib/')
                }
              />
            </Row>
          </View>
        </View>
        <View>
          <View style={styles.footerCard}>
            <AppText style={styles.made}>
              Made With <AntIcon name="heart" color="#f36" size={20} /> By Hasib
            </AppText>
            <AppText style={styles.name}>COVID-19</AppText>
            <AppText style={styles.version}>Version 1.0.0</AppText>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default Developer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    borderColor: '#eee',
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  footerCard: {
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: '5%',
  },
  heroImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    transform: [{rotate: '-9deg'}],
  },
  name: {
    fontFamily: 'BalooDa-SemiBold',
    fontSize: 25,
    color: '#003',
  },
  heroInfo: {
    marginLeft: 15,
  },
  position: {
    fontSize: 15,
    color: '#666',
    fontFamily: 'BalooDa-Medium',
  },
  locContainer: {
    marginLeft: -6,
  },
  location: {color: '#aaa', fontFamily: 'BalooDa-Medium', fontSize: 15},
  title: {fontSize: 20, fontFamily: 'Ubuntu-Bold', marginBottom: 20},
  contact: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
    marginBottom: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 15,
  },
  version: {
    color: '#aaa',
  },
  made: {
    color: '#666',
    fontFamily: 'BalooDa-Medium',
  },
});
