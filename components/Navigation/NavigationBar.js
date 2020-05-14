import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Global from '../UI/Dashboard/Global';
import Home from '../UI/Dashboard/Home';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Developer from '../Developer/Developer';
import SearchCountry from '../CountryData/SearchCountry';

const NavigationBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Global') {
              iconName = 'earth';
            } else if (route.name === 'Developer') {
              iconName = 'contacts';
            } else if (route.name === 'Search') {
              iconName = 'search1';
            }

            // You can return any component that you like here!
            return (
              <View style={styles.icon}>
                <Icon name={iconName} size={28} color={color} />
              </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#00133d',
          inactiveTintColor: '#bbb',
          showLabel: Platform.OS !== 'android',
          style: {
            backgroundColor: '#f2f2f2',
            borderTopColor: '#eee',
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Global" component={Global} />
        <Tab.Screen name="Search" component={SearchCountry} />
        <Tab.Screen name="Developer" component={Developer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
});
