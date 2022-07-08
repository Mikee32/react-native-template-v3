import React, {useState, useEffect} from 'react';
import {Box, Image, VStack, Heading} from 'native-base';
import {ImageBackground, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const {height, width} = Dimensions.get('screen');

export default function Background({appId}) {
  const [appInfo, setAppInfo] = useState([]);

  useEffect(() => {
    axios.get(`https://cms.travpromobile.com/api/app/app-info/?app_id=${appId}&format=json`).then(result => {
      setAppInfo(result.data.app[0]);
    });
  }, []);

  return (
    <VStack>
      <ImageBackground source={{uri: appInfo.splash_screen}} style={{height: height * 0.3, width: width}} resizeMode="cover">
        <Image alt="logo" source={{uri: appInfo.logo_white}} h="24" w="24" position="absolute" top="10" alignSelf="center" resizeMode="contain" />
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0.3}}
          colors={['#18181b', 'transparent']}
          style={{
            height: '100%',
            width: width,
          }}
        />
      </ImageBackground>
    </VStack>
  );
}
