import React, {useState, useContext} from 'react';
import {Badge, Image, Text, Box, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import {createImgixUrl} from '../Config/HelperFunctions';

import LinearGradient from 'react-native-linear-gradient';

export default function PromoteCard({title, number, bg, appId = 859, home}) {
  const navigation = useNavigation();

  return (
    <Pressable rounded="sm" overflow="hidden" _dark={{bg: 'gray.900'}} _light={{bg: 'blueGray.100'}} w={home ? 140 : '48%'} h={160} mb="4" mr="4" shadow={4}>
      <Image position="absolute" top="0" h="100%" w="100%" alt="Tile" source={{uri: createImgixUrl(appId, bg, {height: 300, width: 600})}} />

      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#27272a', 'transparent']}
        style={{flex: 1, position: 'absolute', height: '100%', width: '100%'}}
      />

      <Box position="absolute" bottom="0" width="100%">
        <Text shadow={4} fontSize={'md'} fontWeight="bold" mb="3" color="blueGray.50" textAlign="center" numberOfLines={2} mx="4">
          {title}
        </Text>
      </Box>
    </Pressable>
  );
}
