import React, {useState, useEffect} from 'react';
import {StyleSheet, RefreshControl, FlatList, View} from 'react-native';
import {countryData} from '../../api';
import Spinner from '../Spinner/Spinner';
import {SearchBar} from 'react-native-elements';
import CountryItems from './CountryItems';

const SearchCountry = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData()
      .then(() => setLoading(false))
      .catch((err) => {
        setIsError(true);
        setLoading(true);
        console.log(err);
      });
  }, []);

  const fetchData = async () => {
    setData(await countryData());
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

  const filterCountry = (value) => {
    if (country) {
      let regexp = new RegExp(country.trim(), 'i');
      return value.filter((item) => item.country.match(regexp));
    }
    return value;
  };
  const renderData = (item) => {
    return (
      <View style={styles.renderData}>
        <CountryItems data={item} />
      </View>
    );
  };
  return (
    <View style={styles.view}>
      {loading ? (
        <Spinner isError={isError} onPress={reload} />
      ) : (
        <View>
          <SearchBar
            placeholder="Search here ..."
            onChangeText={(value) => setCountry(value)}
            value={country}
            lightTheme={true}
            platform="android"
            containerStyle={styles.searchbar}
            inputContainerStyle={styles.inputContainer}
          />
          <FlatList
            data={filterCountry(data)}
            renderItem={({item}) => renderData(item)}
            keyExtractor={(_, index) => `${index}`}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={reload} />
            }
            refreshing={loading}
            onRefresh={() => {
              setLoading(true);
              reload();
            }}
            maxToRenderPerBatch={10}
            initialNumToRender={10}
          />
        </View>
      )}
    </View>
  );
};

export default SearchCountry;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderData: {
    padding: 20,
  },
  searchbar: {
    width: '100%',
    backgroundColor: '#eee',
  },
  inputContainer: {
    paddingHorizontal: 13,
  },
});
