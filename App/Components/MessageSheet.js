import React from 'react';
import {Actionsheet, Box, useDisclose, Text, Heading, Image, ScrollView} from 'native-base';
import HTML from 'react-native-render-html';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const MessageSheet = ({title, text, date, thumb}) => {
  const {isOpen, onOpen, onClose} = useDisclose(true);

  return (
    <Box>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <ScrollView>
            <Heading color="blueGray.100" fontSize="xl">
              {title}
            </Heading>
            <Image source={{uri: thumb}} alt="message-image" />
            <HTML
              source={{html: text}}
              contentWidth={width}
              tagsStyles={{h2: {fontSize: 16}, p: {margin: 0, color: 'white'}}}
              baseStyle={{marginVertical: 4}}
            />
            <Text color="primary.300" italic textAlign="right">
              {date}
            </Text>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default MessageSheet;
