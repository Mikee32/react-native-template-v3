import React, {useState, useEffect} from 'react';
import {Box, Text, HStack, ScrollView, FlatList, Progress} from 'native-base';
import TopBar from '../Components/TopBar';
import Header from '../Components/Header';
import axios from 'axios';
import ChapterCard from '../Components/ChapterCard';
import Background from '../Components/Background';

export default function RetainScreen() {
  const [chapters, setChapters] = useState();
  const appId = 859;

  useEffect(() => {
    axios.get(`https://cms.travpromobile.com/api/app/chapter-info/?app_id=${appId}&format=json`).then(result => {
      setChapters(result.data.app);
    });
  }, []);

  return (
    <Box _dark={{bg: 'gray.900'}} _light={{bg: 'blueGray.50'}} flex={1}>
      <TopBar />
      <Background appId={859} />
      <ScrollView contentContainerStyle={{paddingBottom: 150}} py="10" px="4" mt="-12">
        <Header
          title="Retain"
          subtitle="Your go-to resource for retaining your expert knowledge and enabling your sales efforts. Use this area to expertly answer a product question or even as an impromptu sales presentation — anytime, anywhere and from any device."
        />

        <FlatList
          mt="6"
          data={chapters}
          renderItem={({item}) => {
            return (
              <ChapterCard
                key={`chapter${item.chapterID}`}
                title={item.chapterTitle}
                number={item.chapterNumber}
                bg={item.chapterImage}
                type={item.essentials_chapter}
              />
            );
          }}
        />
      </ScrollView>
    </Box>
  );
}
