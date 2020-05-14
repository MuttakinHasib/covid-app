/**
 * @format
 */

import {AppRegistry} from 'react-native';
console.reportErrorsAsExceptions = false;
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
