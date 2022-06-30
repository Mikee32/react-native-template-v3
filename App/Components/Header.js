import React from 'react';
import {Box, Divider, Heading, Text, VStack} from 'native-base';

export default function Header({title, subtitle, divider}) {
  return (
    <VStack>
      <Heading>{title}</Heading>
      <Text>{subtitle}</Text>
      {divider && <Divider />}
    </VStack>
  );
}
