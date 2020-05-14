import React from 'react';
import {StyleSheet, View} from 'react-native';
import Row from '../../screen/Layout/Row';
import Block from '../UI/Block';
import AppText from '../../constants/AppText';
const GlobalPercentage = ({confirmed, deaths, recovered}) => {
  const total = confirmed + deaths + recovered;
  const _confirmed = total ? ((confirmed * 100) / total).toFixed(1) : 0;
  const _recovered = total ? ((recovered * 100) / total).toFixed(1) : 0;
  const _deaths = total ? ((deaths * 100) / total).toFixed(1) : 0;

  return (
    <View style={styles.row}>
      <View style={styles.col}>
        <Row>
          <Block style={styles.block} color="#003cbf" />
          <AppText style={styles.title}>Confirmed</AppText>
        </Row>
        <AppText style={styles.num}>{_confirmed}%</AppText>
      </View>
      <View style={styles.col}>
        <Row>
          <Block style={styles.block} color="#1DD1A1" />
          <AppText style={styles.title}>Recovered</AppText>
        </Row>
        <AppText style={styles.num}>{_recovered}%</AppText>
      </View>
      <View style={styles.col}>
        <Row>
          <Block style={styles.block} color="#f36" />
          <AppText style={styles.title}>Deaths</AppText>
        </Row>
        <AppText style={styles.num}>{_deaths}%</AppText>
      </View>
    </View>
  );
};

export default GlobalPercentage;

const styles = StyleSheet.create({
  row: {
    width: '43%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  col: {
    marginVertical: 10,
  },
  block: {
    width: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 17,
    color: '#95a0b8',
  },
  num: {
    fontSize: 20,
    paddingLeft: 30,
    color: '#00133d',
    fontFamily: 'Ubuntu-Medium',
  },
});
