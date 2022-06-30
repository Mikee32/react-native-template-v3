import React from 'react';
import {Box, Heading, Text, Image, VStack} from 'native-base';
import HTML from 'react-native-render-html';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const MessageCard = ({title, text, date, thumb}) => {
  return (
    <Box bg="blueGray.50" rounded="sm" p="4">
      <VStack>
        <Heading color="gray.800" fontSize="lg">
          {title}
        </Heading>
        <Image source={{uri: thumb}} alt="message-image" />
        <HTML source={{html: text}} contentWidth={width} tagsStyles={{h2: {fontSize: 16}, p: {margin: 0}}} />
        <Text color="gray.400" italic>
          {date}
        </Text>
      </VStack>
    </Box>
  );
};

export default MessageCard;
