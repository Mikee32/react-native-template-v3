import React, {useState, useEffect} from 'react';
import {Box, Text, HStack, ScrollView, FlatList, Progress} from 'native-base';
import TopBar from '../Components/TopBar';
import Header from '../Components/Header';
import axios from 'axios';
import PromoteCard from '../Components/PromoteCard';

export default function SellScreen() {
  const [sell, setSell] = useState([]);
  const [promote, setPromote] = useState([]);
  const appId = 787;

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

  return (
    <Box _dark={{bg: 'gray.900'}} _light={{bg: 'blueGray.50'}} flex={1} safeAreaTop>
      <TopBar />

      <ScrollView contentContainerStyle={{paddingBottom: 150}} py="10" px="4">
        <Header title="Sell" subtitle="Answer client questions and close the sale." />

        <FlatList
          mt="6"
          numColumns={2}
          data={sell}
          renderItem={({item}) => {
            return <PromoteCard key={`chapter${item.chapterID}`} title={item.title} number={item.chapterNumber} bg={item.image} />;
          }}
        />
      </ScrollView>
    </Box>
  );
}