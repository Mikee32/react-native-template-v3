import React, {useState, useEffect} from 'react';
import {Box, Text, HStack, ScrollView, FlatList, Progress} from 'native-base';
import TopBar from '../Components/TopBar';
import Header from '../Components/Header';
import axios from 'axios';
import ChapterCard from '../Components/ChapterCard';

export default function TrainScreen() {
  const [chapters, setChapters] = useState();
  const appId = 787;

  useEffect(() => {
    axios.get(`https://cms.travpromobile.com/api/app/chapter-info/?app_id=${appId}&format=json`).then(result => {
      setChapters(result.data.app);
    });
  }, []);

  return (
    <Box _dark={{bg: 'gray.900'}} _light={{bg: 'blueGray.50'}} flex={1} safeAreaTop>
      <TopBar />

      <ScrollView contentContainerStyle={{paddingBottom: 150}} py="10" px="4">
        <Header title="Training Library" subtitle="Educate, engage and become the expert" />
        <Text color="emerald.400" mt="4">
          100% completed
        </Text>

        <Progress
          mt="1"
          bg="coolGray.100"
          _filledTrack={{
            bg: 'emerald.400',
          }}
          value={55}
          size="xs"
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
