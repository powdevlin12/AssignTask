import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {AppStack} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
