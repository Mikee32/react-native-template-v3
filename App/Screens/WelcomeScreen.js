import React, {useState, useEffect} from 'react';
import {Box, Text, Image, Heading, ScrollView, Button} from 'native-base';
import {Dimensions} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('screen');

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [appInfo, setAppInfo] = useState([]);
  const appId = 787;

  useEffect(() => {
    axios.get(`https://cms.travpromobile.com/api/app/app-info/?app_id=${appId}&format=json`).then(result => {
      setAppInfo(result.data.app[0]);
    });
  }, []);

  console.log(JSON.stringify(appInfo, null, 2));

  return (
    <Box flex={1} _dark={{bg: 'gray.900'}} justifyContent="center" alignItems="center">
      <Image alt="background-image" source={{uri: appInfo.login_image}} h="100%" w="100%" position="absolute" />
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
      <Image alt="logo-image" source={{uri: appInfo.appIcon}} h="32" w="32" position="absolute" top="20" />

      <Box position="absolute" bottom="10" right="20" left="20" p="6">
        <Heading textAlign="center" mb="4">
          Hi Mike!
        </Heading>
        <Button my="2" bg="primary.400" onPress={() => navigation.navigate('Home')}>
          <Text>Continue</Text>
        </Button>
        <Button bg="blueGray.50">
          <Text color="gray.800">Switch User</Text>
        </Button>
      </Box>
    </Box>
  );
}
