import React from 'react';
import {Box, Heading, Text, Image, VStack} from 'native-base';
import HTML from 'react-native-render-html';

export default function MessageCard({title, message, date, thumb}) {
  return (
    <Box>
      <VStack>
        <Heading>{title}</Heading>
        <Image source={{uri: thumb}} />
        <HTML source={message} />
      </VStack>
    </Box>
  );
}
