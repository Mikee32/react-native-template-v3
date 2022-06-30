import React, {useContext} from 'react';
import {useColorMode} from 'native-base';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigation} from './TabNavigation';
import CustomDrawer from '../Components/CustomDrawer';
import FontAwesomePro from 'react-native-fontawesome-pro';
import RetainScreen from '../Screens/RetainScreen';
import TrainScreen from '../Screens/TrainScreen';
import PromoteScreen from '../Screens/PromoteScreen';
import SellScreen from '../Screens/SellScreen';
import SearchScreen from '../Screens/SearchScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import MessagesScreen from '../Screens/MessagesScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const {colorMode} = useColorMode();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: 'front',
        drawerActiveBackgroundColor: colorMode === 'dark' ? 'white' : 'black',
        drawerActiveTintColor: colorMode === 'dark' ? '#333' : 'white',
        drawerInactiveTintColor: colorMode === 'dark' ? 'white' : '#333',
        drawerLabelStyle: {marginLeft: -15},
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={TabNavigation} options={{drawerIcon: ({color}) => <FontAwesomePro name="home" size="18" color={color} />}} />
    </Drawer.Navigator>
  );
};

export {DrawerNavigation};
