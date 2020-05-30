import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../../constants/AppText';
import Row from '../../screen/Layout/Row';
import Block from '../UI/Block';
import NumberCounter from '../NumberCounter';

const LastInfo = ({data}) => {
  return (
    <View>
      <AppText style={styles.topTitle}>New Updates</AppText>
      <Row style={styles.container}>
        <Row style={styles.card}>
          <View>
            <Row>
              <Block style={styles.block} color="#FFCA28" />
              <AppText style={styles.title}>New Cases</AppText>
            </Row>
            <AppText style={styles.num}>
              {data?.todayCases >= 0 ? (
                <NumberCounter value={data.todayCases} />
              ) : (
                'Loading'
              )}
            </AppText>
          </View>
        </Row>
        <Row style={styles.card}>
          <View>
            <Row>
              <Block style={styles.block} color="#f33" />
              <AppText style={styles.title}>New Deaths</AppText>
            </Row>
            <AppText style={styles.num}>
              {data?.todayDeaths >= 0 ? (
                <NumberCounter value={data.todayDeaths} />
              ) : (
                'Loading'
              )}
            </AppText>
          </View>
        </Row>
      </Row>
    </View>
  );
};

export default LastInfo;

const styles = StyleSheet.create({
  topTitle: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
    paddingBottom: 10,
    borderBottomColor: '#eee',
    borderRadius: 15,
    borderBottomWidth: 2,
  },
  container: {
    // marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
    // borderWidth: 3,
    borderColor: '#eee',
    borderRadius: 5,
    paddingVertical: 10,
  },
  card: {
    marginVertical: 10,
    width: 145,
    maxWidth: '50%',
    flexWrap: 'wrap',
  },
  block: {
    width: 18,
    height: 18,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: '#95a0b8',
  },
  num: {
    marginTop: 8,
    fontSize: 20,
    fontFamily: 'Ubuntu-Bold',
    color: '#00133d',
  },
});
