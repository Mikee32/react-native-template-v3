import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import TrainScreen from '../Screens/TrainScreen';
import RetainScreen from '../Screens/RetainScreen';
import PromoteScreen from '../Screens/PromoteScreen';
import SellScreen from '../Screens/SellScreen';
import FontAwesomePro from 'react-native-fontawesome-pro';
import {Center, Text} from 'native-base';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false}}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#e68532',
          paddingTop: 15,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              <FontAwesomePro name="home" size="18" color="white" type={focused ? 'solid' : 'regular'} />
              <Text color="white" fontWeight={focused ? 'bold' : 'normal'}>
                Home
              </Text>
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Train"
        component={TrainScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              <FontAwesomePro name="graduation-cap" size="18" color="white" type={focused ? 'solid' : 'regular'} />
              <Text color="white" fontWeight={focused ? 'bold' : 'normal'}>
                Train
              </Text>
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Retain"
        component={RetainScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              <FontAwesomePro name="book-reader" size="18" color="white" type={focused ? 'solid' : 'regular'} />
              <Text color="white" fontWeight={focused ? 'bold' : 'normal'}>
                Retain
              </Text>
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Promote"
        component={PromoteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              <FontAwesomePro name="bullhorn" size="18" color="white" type={focused ? 'solid' : 'regular'} />
              <Text color="white" fontWeight={focused ? 'bold' : 'normal'}>
                Promote
              </Text>
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={SellScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Center>
              <FontAwesomePro name="chart-line" size="18" color="white" type={focused ? 'solid' : 'regular'} />
              <Text color="white" fontWeight={focused ? 'bold' : 'normal'}>
                Sell
              </Text>
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export {TabNavigation};
