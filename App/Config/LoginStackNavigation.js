import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigation} from './DrawerNavigation';
import LoginScreen from '../Screens/LoginScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const LoginStackNavigation = () => {
  const Login = createStackNavigator();

  return (
    <Login.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Login.Screen name="Welcome" component={WelcomeScreen} />
      <Login.Screen name="Login" component={LoginScreen} />
      <Login.Screen name="Home" component={DrawerNavigation} />
    </Login.Navigator>
  );
};

export {LoginStackNavigation};
