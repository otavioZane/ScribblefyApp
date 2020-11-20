import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native' 

import Home from './pages/home';
import Storage from './pages/localizationStorage'

const {Navigator, Screen} = createStackNavigator();

const Routes = () => {

  return(
  <Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }   
  }} >
    <Screen name="Home" component={Home} options={({navigation}) => ({
      title: 'Scribblefy',
      headerTitleAlign: "center",
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Storage")}
          title="Salvos"
          color="#000"
          style={{
            color: '#fff',
            background: '#000',
            fontWeight: "bold"
          }}
        />
      )     
    })} />
    <Screen name="Storage" component={Storage} options={{
      title: 'Localizações',
      headerTitleAlign: "center",
    }} />
  </Navigator>
)};

export default Routes;
