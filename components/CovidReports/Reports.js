import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Container from '../../constants/Container';
import AppText from '../../constants/AppText';
import Row from '../../screen/Layout/Row';
import moment from 'moment';
import Cards from '../Cards/Cards';
import Chart from '../Charts/Chart';
import Percentage from './Percentage';
import LastInfo from '../Cards/LastInfo';

const Reports = ({data}) => {
  const lastUpdate = data?.updated && (
    <AppText style={styles.update}>
      Last Updated {moment(data?.updated).fromNow()}
    </AppText>
  );

  const home = (
    <Row style={styles.countryInfo}>
      <Image
        style={styles.flagIcon}
        source={{uri: 'https://disease.sh/assets/img/flags/bd.png'}}
      />
      <AppText style={styles.title}>{data?.country}</AppText>
    </Row>
  );

  return (
    <Container>
      <Row style={styles.row}>
        {data?.country ? (
          home
        ) : (
          <AppText style={styles.title}>Global Cases</AppText>
        )}
        {lastUpdate}
      </Row>
      <Row style={styles.row}>
        <Chart data={data} />
        <Percentage {...data} />
      </Row>
      <Cards data={data} />
      {data?.country && <LastInfo data={data} />}
    </Container>
  );
};

export default Reports;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  countryInfo: {
    width: '45%',
    paddingRight: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
    marginRight: 5,
  },
  update: {
    fontSize: 12,
    color: '#aaa',
  },
  flagIcon: {
    marginRight: 10,
    width: 33,
    height: 19.8,
  },
});
