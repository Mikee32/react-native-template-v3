import React from 'react';
import {Box, Text, Pressable, HamburgerIcon, HStack, Icon, IconButton} from 'native-base';
import {Dimensions} from 'react-native';
import FontAwesomePro from 'react-native-fontawesome-pro';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

export default function TopBar() {
  const navigation = useNavigation();
  return (
    <Pressable
      position="absolute"
      p="2"
      rounded="sm"
      top="10"
      left="5"
      bg="primary.400"
      zIndex={99}
      justifyContent="center"
      alignItems="center"
      onPress={() => {
        navigation.openDrawer();
      }}>
      <Icon as={<FontAwesomePro name="bars" color="white" size={22} />} color="blueGray.50" size="2xl" />
    </Pressable>
  );
}
