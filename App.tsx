import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {Home} from './src/screens/home';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <Home />
    </>
  );
};

export default App;
