import React, {useEffect, useContext, useState} from 'react';
import {useColorMode, Avatar, Icon, Button, Box, Divider, Heading, HStack, Text, VStack} from 'native-base';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Dimensions, ImageBackground} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ThemeToggle from '../Config/ThemeToggle';
import FontAwesomePro from 'react-native-fontawesome-pro';

const {height, width} = Dimensions.get('screen');

export default function CustomDrawer(props) {
  const navigation = useNavigation();
  const {colorMode} = useColorMode();

  return (
    <Box flex={1} _dark={{bg: 'gray.900'}} _light={{bg: 'blueGray.200'}} borderRightRadius="2xl">
      <VStack alignItems="center" space={1} height={height * 0.3}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <LinearGradient
            colors={colorMode === 'light' ? ['transparent', '#e2e8f0'] : ['transparent', '#18181b']}
            style={{position: 'absolute', height: '100%', width: '100%'}}
          />
          <Avatar bg="amber.500">ML</Avatar>
          <Text _dark={{color: 'blueGray.100'}} _light={{color: 'gray.900'}} fontWeight="bold" fontSize="md"></Text>
          <Text _dark={{color: 'gray.300'}} _light={{color: 'gray.900'}} fontWeight="400" fontSize="sm" italic bold mb="5"></Text>
          <ThemeToggle />
        </ImageBackground>
      </VStack>

      <DrawerContentScrollView {...props} style={{marginTop: -40}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Button
        marginX="10"
        position="absolute"
        bottom="10"
        alignSelf="center"
        _dark={{bg: 'white'}}
        _light={{bg: 'primary.400'}}
        mt="10"
        size="md"
        _pressed={{
          transform: [
            {
              scale: 0.96,
            },
          ],
        }}
        endIcon={<Icon as={<FontAwesomePro name="sign-out-alt" color={colorMode === 'light' ? 'white' : 'black'} size={20} />} />}>
        <Text _light={{color: 'blueGray.50'}} _dark={{color: 'gray.900'}} fontSize="sm">
          Log Out
        </Text>
      </Button>
    </Box>
  );
}
