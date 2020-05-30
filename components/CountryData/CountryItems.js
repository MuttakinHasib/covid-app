import React from 'react';
import {StyleSheet, Image, View, ActivityIndicator} from 'react-native';
import Row from '../../screen/Layout/Row';
import AppText from '../../constants/AppText';
import Block from '../UI/Block';
import NumberCounter from '../NumberCounter';

const CountryItems = ({
  data: {
    cases,
    deaths,
    country,
    todayCases,
    recovered,
    todayDeaths,
    critical,
    countryInfo,
  },
}) => {
  const flag = countryInfo.flag;
  const fetchTotalData = [cases, recovered, deaths, critical];
  const fetchNewUpdates = [todayCases, todayDeaths];
  const totalDataColor = ['#003cbf', '#1DD1A1', '#f36', '#003'];
  const newUpdatesColor = ['#FFCA28', '#f36'];
  const totalDataTitle = ['Confirmed', 'Recovered', 'Deaths', 'Critical'];
  const newUpdatesTitle = ['New Cases', 'New Deaths'];

  const countryInformation = (
    <Row style={styles.countryInfo}>
      {flag ? (
        <Image style={styles.flag} source={{uri: `${flag}`}} />
      ) : (
        <ActivityIndicator color="#f36" size="small" />
      )}
      <AppText style={styles.countryName}>{country}</AppText>
    </Row>
  );

  const totalData = (data, title, color) => (
    <Row style={styles.container}>
      {countryInformation}
      {data.map((item, index) => (
        <Row style={styles.card} key={index}>
          <View>
            <Row>
              <Block style={styles.block} color={color[index]} />
              <AppText style={styles.title}>{title[index]}</AppText>
            </Row>
            <AppText style={styles.num}>
              <NumberCounter value={item} />
            </AppText>
          </View>
        </Row>
      ))}
      {newUpdates(fetchNewUpdates, newUpdatesTitle, newUpdatesColor)}
    </Row>
  );

  const newUpdates = (data, title, color) =>
    data.map((item, index) => (
      <Row style={styles.card} key={index}>
        <View>
          <Row>
            <Block style={styles.block} color={color[index]} />
            <AppText style={styles.title}>{title[index]}</AppText>
          </Row>
          <AppText style={styles.num}>
            <NumberCounter value={item} />
          </AppText>
        </View>
      </Row>
    ));
  return (
    <View>{totalData(fetchTotalData, totalDataTitle, totalDataColor)}</View>
  );
};

export default CountryItems;

const styles = StyleSheet.create({
  countryInfo: {
    borderBottomWidth: 3,
    borderBottomColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  container: {
    marginVertical: 5,
    padding: 10,
    borderWidth: 3,
    borderColor: '#eee',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    borderRadius: 5,
    padding: 15,
    width: '48.5%',
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
  countryName: {
    fontSize: 20,
    color: '#003',
    fontFamily: 'Ubuntu-Medium',
    paddingLeft: 10,
  },
  num: {
    marginTop: 8,
    fontSize: 20,
    fontFamily: 'Ubuntu-Bold',
    color: '#00133d',
  },
  flag: {height: 18, width: 28, margin: 8},
  updatesTitle: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
});
