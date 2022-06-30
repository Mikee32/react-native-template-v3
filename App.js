import React, {createContext, useContext, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {NativeBaseProvider, theme} from 'native-base';
import Theme from './App/Config/Theme';
import {LoginStackNavigation} from './App/Config/LoginStackNavigation';

export default function App({navigation}) {
  return (
    <>
      <NativeBaseProvider theme={Theme}>
        <StatusBar hidden />

        <NavigationContainer
          screenOptions={{
            headerShown: false,
          }}>
          <LoginStackNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
