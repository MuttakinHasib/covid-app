import React from 'react';
import {StyleSheet, View} from 'react-native';
import Row from '../../screen/Layout/Row';
import Block from '../UI/Block';
import AppText from '../../constants/AppText';
import NumberCounter from '../NumberCounter';

const Cards = ({data}) => {
  return (
    <Row style={styles.container}>
      <Row style={styles.card}>
        <View>
          <Row style={styles.cardTopContainer}>
            <Block style={styles.block} color="#003cbf" />
            <AppText style={styles.title}>Confirmed</AppText>
          </Row>
          <AppText style={styles.num}>
            {data?.confirmed >= 0 ? (
              <NumberCounter value={data.confirmed} />
            ) : (
              'Loading'
            )}
          </AppText>
        </View>
      </Row>
      <Row style={styles.card}>
        <View>
          <Row style={styles.cardTopContainer}>
            <Block style={styles.block} color="#1DD1A1" />
            <AppText style={styles.title}>Recovered</AppText>
          </Row>
          <AppText style={styles.num}>
            {data?.recovered >= 0 ? (
              <NumberCounter value={data.recovered} />
            ) : (
              'Loading'
            )}
          </AppText>
        </View>
      </Row>
      <Row style={styles.card}>
        <View>
          <Row style={styles.cardTopContainer}>
            <Block style={styles.block} color="#f36" />
            <AppText style={styles.title}>Deaths</AppText>
          </Row>
          <AppText style={styles.num}>
            {data?.deaths >= 0 ? (
              <NumberCounter value={data.deaths} />
            ) : (
              'Loading'
            )}
          </AppText>
        </View>
      </Row>
      {data?.country ? (
        <Row style={styles.card}>
          <View>
            <Row style={styles.cardTopContainer}>
              <Block style={styles.block} color="#003" />
              <AppText style={styles.title}>Critical</AppText>
            </Row>
            <AppText style={styles.num}>
              {data?.critical >= 0 ? (
                <NumberCounter value={data.critical} />
              ) : (
                'Loading'
              )}
            </AppText>
          </View>
        </Row>
      ) : (
        <Row style={styles.card}>
          <View>
            <Row style={styles.cardTopContainer}>
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
      )}
    </Row>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  cardTopContainer: {
    flexWrap: 'wrap',
  },
  card: {
    marginVertical: 10,
    borderWidth: 3,
    borderColor: '#eee',
    borderRadius: 5,
    padding: 15,
    width: '48.5%',
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
    // fontFamily: 'Ubuntu-Medium',
  },
  num: {
    marginTop: 8,
    fontSize: 18,
    fontFamily: 'Ubuntu-Bold',
    color: '#00133d',
  },
});
