import React, {useState, useEffect} from 'react';
import {Box, Text, Image, Heading, ScrollView, Button, HStack, VStack} from 'native-base';
import {Dimensions} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomePro from 'react-native-fontawesome-pro';
const {height, width} = Dimensions.get('screen');

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [appInfo, setAppInfo] = useState([]);
  const appId = 859;

  useEffect(() => {
    axios.get(`https://cms.travpromobile.com/api/app/app-info/?app_id=${appId}&format=json`).then(result => {
      setAppInfo(result.data.app[0]);
    });
  }, []);

  console.log(JSON.stringify(appInfo, null, 2));

  return (
    <Box flex={1} _dark={{bg: 'gray.900'}} justifyContent="center" alignItems="center">
      <Image alt="background-image" source={{uri: appInfo.splash_screen}} h="100%" w="100%" position="absolute" alignSelf="center" />
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
      <Image alt="logo-image" source={{uri: appInfo.logo_wide_white}} h="32" w="32" position="absolute" top="20" />

      <VStack position="absolute" space={4} bottom="10" alignSelf="center">
        <Heading mb="4" fontSize="2xl" textAlign="center">
          Hi Mike!
        </Heading>
        <Button
          bg="primary.400"
          onPress={() => navigation.navigate('Home')}
          py="2.5"
          px="20"
          rounded="full"
          borderBottomWidth={5}
          borderLeftWidth={0.5}
          borderRightWidth={0.5}
          borderColor="primaryAccent.400">
          <Text>Continue</Text>
        </Button>
        <Button
          bg="blueGray.50"
          py="2.5"
          px="20"
          onPress={() => navigation.navigate('Login')}
          rounded="full"
          borderBottomWidth={5}
          borderLeftWidth={0.5}
          borderRightWidth={0.5}
          borderColor="rgba(0,0,0,0.3)">
          <Text color="gray.800">Switch User</Text>
        </Button>
      </VStack>
    </Box>
  );
}
