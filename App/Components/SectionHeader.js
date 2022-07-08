import React from 'react';
import {HStack, Heading, Text} from 'native-base';

export default function SectionHeader({title, subtitle, highlight}) {
  return (
    <HStack alignItems="center" my="4">
      <Heading fontSize="lg" bold>
        {title}
      </Heading>
      <Text ml="2" fontSize="lg" color="primary.400" bold>
        {highlight}
      </Text>
    </HStack>
  );
}
