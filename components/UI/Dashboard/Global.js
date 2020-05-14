import React, {useEffect, useState} from 'react';
import {ScrollView, RefreshControl, View, StyleSheet} from 'react-native';
import {globalData} from '../../../api';
import Reports from '../../CovidReports/Reports';
import Spinner from '../../Spinner/Spinner';

const Global = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetchData()
      .then(() => setLoading(false))
      .catch(() => {
        setIsError(true);
        setLoading(true);
      });
  }, []);

  const fetchData = async () => {
    setData(await globalData());
  };
  const reload = () => {
    setLoading(true);
    fetchData()
      .then(() => {
        setIsError(false);
        setRefreshing(false);
        setLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setRefreshing(true);
        setLoading(true);
      });
  };

  return (
    <View style={styles.view}>
      {loading ? (
        <Spinner isError={isError} onPress={reload} />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={reload} />
          }>
          <Reports data={data} />
        </ScrollView>
      )}
    </View>
  );
};

export default Global;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
