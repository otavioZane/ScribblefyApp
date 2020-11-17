import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/home';


const {Navigator, Screen} = createStackNavigator();

const Routes = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name="Home" component={Home} />
  </Navigator>
);

export default Routes;
