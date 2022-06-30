import React, {useContext, useEffect, useState} from 'react';
import {Box, Actionsheet, useDisclose, Text, Image, Heading, Center, VStack, HStack, ScrollView, FlatList, Pressable, Badge, Button} from 'native-base';
import {ImageBackground} from 'react-native';
import {Dimensions} from 'react-native';
import axios from 'axios';
import SectionHeader from '../Components/SectionHeader';
import LinearGradient from 'react-native-linear-gradient';
import ChapterCard from '../Components/ChapterCard';
import PromoteCard from '../Components/PromoteCard';
import SellCard from '../Components/SellCard';

import TopBar from '../Components/TopBar';
import MessageCard from '../Components/MessageCard';
import MessageSheet from '../Components/MessageSheet';

const {height, width} = Dimensions.get('screen');

const HomeScreen = () => {
  const [appInfo, setAppInfo] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [sell, setSell] = useState([]);
  const [promote, setPromote] = useState([]);
  const appId = 787;

  useEffect(() => {
    axios.get(`https://cms.travpromobile.com/api/app/app-info/?app_id=${appId}&format=json`).then(result => {
      setAppInfo(result.data.app[0]);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://cms.travpromobile.com/api/app/chapter-info/?app_id=${appId}&format=json`).then(result => {
      setChapters(result.data.app);
    });
  }, []);

  useEffect(() => {
    const promoteLoad = axios.get(`https://cms.travpromobile.com/api/app/sales-companion/?app_id=${appId}&type=fastfacts&format=json`);
    const sellLoad = axios.get(`https://cms.travpromobile.com/api/app/sales-companion/?app_id=${appId}&type=toolbox&format=json`);
    // console.log('ChapterInfoContext: ' + JSON.stringify(chapterInfoContext.chapterInfo[620], null, 2));
    axios.all([promoteLoad, sellLoad]).then(
      axios.spread(function (promoteRes, sellRes) {
        // setChapters(chaptersRes.data.app);
        setSell(sellRes.data);
        setPromote(promoteRes.data);
      }),
    );
  }, []);

  const [messages, setMessages] = useState([]);

  React.useEffect(() => {
    axios.get(`https://cms.travpromobile.com/api/app/message/?app_id=${appId}&format=json`).then(result => {
      if (result.data !== undefined) {
        setMessages(result.data);
      }
    });
  }, []);

  console.log(JSON.stringify(appInfo, null, 2));
  console.log(JSON.stringify(chapters, null, 2));

  console.log(JSON.stringify(messages, null, 2));

  return (
    <Box flex={1} height={height} width={width} bg="#18181b">
      <TopBar />
      <ScrollView contentContainerStyle={{paddingBottom: 200}}>
        <VStack>
          <ImageBackground source={{uri: appInfo.splash_screen}} style={{height: height * 0.6, width: '100%'}} resizeMode="cover">
            <Image alt="logo" source={{uri: appInfo.logo}} h="20" w="20" position="absolute" top="32" alignSelf="center" />
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0.3}}
              colors={['#18181b', 'transparent']}
              style={{
                flex: 1,
                position: 'absolute',
                height: '100%',
                width: width,
              }}
            />
            <VStack position="absolute" bottom="-20" alignSelf="center" justifyContent="center" alignItems="center">
              <Heading fontSize="3xl" color={appInfo.primary_color} mb="4">
                {appInfo.landing_quote}
              </Heading>
              <Heading fontSize="md" mt="1" textTransform="uppercase">
                {appInfo.appName}
              </Heading>
              <Heading fontSize="xs" textAlign="center" mt="1" color="gray.300" w="80%">
                {appInfo.appDescriptionShort}
              </Heading>
            </VStack>
          </ImageBackground>
          <Box pl="3" mt="8">
            <SectionHeader title="Continue Training" highlight=">" />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              data={chapters}
              renderItem={({item}) => {
                return (
                  <ChapterCard
                    home
                    key={`chapter${item.chapterID}`}
                    title={item.chapterTitle}
                    number={item.chapterNumber}
                    bg={item.chapterImage}
                    type={item.essentials_chapter}
                  />
                );
              }}
            />
            <SectionHeader title="Recently Visited" highlight=">" />
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              data={promote}
              renderItem={({item}) => {
                return <PromoteCard home key={`chapter${item.chapterID}`} title={item.title} number={item.chapterNumber} bg={item.image} />;
              }}
            />
          </Box>
          <Box height={height * 0.35} width={width} mt="6">
            <Image source={{uri: 'https://front.travpromobile.com/880/bg.jpg'}} style={{height: 200, width: '100%'}} />
            <Heading fontSize="xl" mt="4" textAlign="center">
              Canada Specialist XPO
            </Heading>
            <Text textAlign="center" my="1">
              June 21 & 22, 2022
            </Text>
            <Text textAlign="center">14:00 – 18:00</Text>
            <Button w="25%" alignSelf="center" mt="4">
              <Text>Visit Show</Text>
            </Button>
          </Box>
          <Box pl="3" mt="10">
            <SectionHeader title="Your Favorite Items" highlight=">" />
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              data={sell}
              renderItem={({item}) => {
                return <SellCard key={`chapter${item.chapterID}`} title={item.title} number={item.chapterNumber} bg={item.image} />;
              }}
            />
          </Box>
        </VStack>
      </ScrollView>
      {messages.map(message => (
        <MessageSheet title={message.name} text={message.message} date={message.date} thumb={message.thumb} />
      ))}
    </Box>
  );
};

export default HomeScreen;
