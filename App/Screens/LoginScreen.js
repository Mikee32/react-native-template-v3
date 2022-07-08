import React, {useState, useEffect} from 'react';
import {Box, Image, FormControl, Input, Link, Text, Heading, ScrollView, Center, Button, HStack, VStack} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function LoginScreen() {
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
    <Box flex={1} _dark={{bg: 'gray.900'}}>
      <Box flex={0.4} bg="blueGray.100">
        <Image source={{uri: appInfo.login_image}} h="100%" w="100%" />
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0.3}}
          colors={['#18181b', 'transparent']}
          style={{
            flex: 1,
            position: 'absolute',
            height: '100%',
            width: '100%',
          }}
        />
      </Box>
      <Box flex={0.6}>
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
              size="xl"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}>
              Welcome
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: 'primary.400',
              }}
              color="secondary.400"
              fontWeight="medium"
              size="md">
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label _text={{fontSize: 'lg'}}>Email</FormControl.Label>
                <Input rounded="full" />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{fontSize: 'lg'}}>Password</FormControl.Label>
                <Input type="password" rounded="full" />
                <Link
                  _text={{
                    fontSize: 'sm',
                    fontWeight: '500',
                    color: 'primary.400',
                  }}
                  alignSelf="flex-end"
                  mt="3">
                  Forget Password?
                </Link>
              </FormControl>
              <Button
                mt="2"
                bg="primary.400"
                _text={{color: 'white', fontSize: 'md'}}
                rounded="full"
                borderBottomWidth={5}
                borderLeftWidth={0.5}
                borderRightWidth={0.5}
                borderColor="primaryAccent.400">
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="md"
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  I'm a new user.{' '}
                </Text>
                <Link
                  _text={{
                    color: 'secondary.500',
                    fontWeight: 'medium',
                    fontSize: 'md',
                  }}
                  href="#">
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
        ;
      </Box>
    </Box>
  );
}
