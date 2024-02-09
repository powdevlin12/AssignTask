import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {AppStack, AuthStack} from './src/navigation';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
