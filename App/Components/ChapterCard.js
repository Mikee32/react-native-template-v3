import React, {useContext, useEffect, useState} from 'react';
import {Box, Pressable, Progress, Text, Heading, Badge} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground, Dimensions} from 'react-native';
import {createImgixUrl} from '../Config/HelperFunctions';

const {height, width} = Dimensions.get('screen');

export default function ChapterCard({title, number, bg, appId = 859, type, home}) {
  return (
    <Pressable m="2">
      <Box width={home ? width * 0.8 : '100%'} height={170} rounded="sm" overflow="hidden">
        <ImageBackground
          source={{
            uri: createImgixUrl(appId, bg, {
              height: 300,
              width: 600,
            }),
          }}
          style={{height: '100%', width: '100%'}}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0.3}}
            colors={['rgba(39, 39, 42, 0.9)', 'transparent']}
            style={{
              flex: 1,
              position: 'absolute',
              height: '100%',
              width: width,
            }}
          />
          <Box position="absolute" bottom="4" alignSelf="center" w="100%" px="6">
            <Text italic textAlign="center" fontSize="md">
              Chapter {number}
            </Text>
            <Heading textAlign="center" fontSize="xl" mb="4">
              {title}
            </Heading>
            <Progress
              rounded="sm"
              size="xs"
              zIndex={99}
              bg="coolGray.200"
              value={5}
              _filledTrack={{
                bg: 'primary.400',
              }}
            />
          </Box>
          <Box position="absolute" top="2" right="2">
            {type === true && <Badge colorScheme="info">Foundation</Badge>}
          </Box>
        </ImageBackground>
      </Box>
    </Pressable>
  );
}
