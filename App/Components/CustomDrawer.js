import React, {useEffect, useContext, useState} from 'react';
import {useColorMode, Image, Avatar, Icon, Button, Box, Divider, Heading, HStack, Text, VStack, Progress} from 'native-base';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Dimensions, ImageBackground} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ThemeToggle from '../Config/ThemeToggle';
import FontAwesomePro from 'react-native-fontawesome-pro';
import badgeSilver from '../Assets/silver_badge.png';
import badgeBronze from '../Assets/bronze_badge.png';
import badgeGold from '../Assets/golden_badge.png';
import xp_20 from '../Assets/20_badge.png';
import xp_25 from '../Assets/25_badge.png';
import xp_50 from '../Assets/50_badge.png';
import axios from 'axios';

const {height, width} = Dimensions.get('screen');

export default function CustomDrawer(props) {
  const navigation = useNavigation();
  const {colorMode} = useColorMode();

  const [appInfo, setAppInfo] = useState([]);
  const appId = 859;

  useEffect(() => {
    axios.get(`https://cms.travpromobile.com/api/app/app-info/?app_id=${appId}&format=json`).then(result => {
      setAppInfo(result.data.app[0]);
    });
  }, []);

  return (
    <Box flex={1} _dark={{bg: 'gray.900'}} _light={{bg: 'blueGray.200'}}>
      <Box alignItems="center" space={1} height={height * 0.3}>
        <ImageBackground
          source={{uri: appInfo.question_header}}
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
          <Heading fontSize="md" my="2">
            Mike van de Louw
          </Heading>

          <ThemeToggle />
        </ImageBackground>
      </Box>
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
        onPress={() => navigation.navigate('Welcome')}
        endIcon={<Icon as={<FontAwesomePro name="sign-out-alt" color={colorMode === 'light' ? 'white' : 'black'} size={20} />} />}>
        <Text _light={{color: 'blueGray.50'}} _dark={{color: 'gray.900'}} fontSize="sm">
          Log Out
        </Text>
      </Button>
    </Box>
  );
}
