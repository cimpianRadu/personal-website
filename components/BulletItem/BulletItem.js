import { Flex, Heading, Text } from '@chakra-ui/react';

export const BulletItem = ({ title = 'Title' }) => {
  return (
    <Flex flexDirection="row">
      <Text fontSize={30} marginRight="4">
        🔵
      </Text>
      <Heading as="u">{title}</Heading>
    </Flex>
  );
};
