import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import SvgSpinner from '../Spinner/SvgSpinner';

const Chart = ({data, isLoading}) => {
  const report = [data?.confirmed, data?.deaths, data?.recovered];
  const color = ['#014', '#ff5c4d', '#1eD1a1'];
  data?.confirmed && isLoading;
  const pieData = report
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: color[index],
      },
      key: `pie-${index}`,
    }));
  const chart = (
    <PieChart
      style={styles.piChart}
      valueAccessor={({item}) => item.value}
      data={pieData}
      spacing={3}
      padAngle={0}
      innerRadius={'50%'}
      outerRadius={'90%'}
      labelRadius={110}
      // animate={true}
      // animationDuration={2}
    />
  );
  return (
    <View style={styles.chart}>{data?.confirmed ? chart : <SvgSpinner />}</View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chart: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  piChart: {
    height: 180,
    width: 180,
  },
});
