import React from 'react';
import Layout from './screen/Layout/Layout';
import Header from './components/Header';
import NavigationBar from './components/Navigation/NavigationBar';
import {StatusBar, Platform} from 'react-native';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Layout>
      {(Platform.OS === 'ios' && <StatusBar barStyle="default" />) || (
        <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
      )}
      <Header />
      <NavigationBar />
    </Layout>
  );
};

export default App;
