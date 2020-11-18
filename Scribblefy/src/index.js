import React, {useEffect, useState} from 'react';
import Routes from './routes';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedSplash from 'react-native-animated-splash-screen';

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => setTimeout(() => setLoading(true), 1000), []);

  return (
    <NavigationContainer>
      <AnimatedSplash
        translucent={true}
        isLoaded={loading}
        // logoImage={require('./assets/img/transplantar_logo.png')}
        backgroundColor={'#6E78F7'}
        logoHeight={350}
        logoWidth={300}>
        <Routes />
      </AnimatedSplash>
    </NavigationContainer>
  );
};

export default App;
