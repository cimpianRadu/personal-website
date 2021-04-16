import { Heading, Center, Flex, Text, Spacer, Switch } from '@chakra-ui/react';

export const Header = () => (
  <Flex background="teal.100" paddingY={3} background="teal.200">
    <Spacer />
    <Center flex={1}>
      <Heading color="gray.600">Radu G. Cîmpian</Heading>
    </Center>
    <Flex
      flex={1}
      // background="telegram.200"
      justifyContent="flex-end"
      alignItems="flex-end"
      paddingRight={10}
    >
      <Text fontSize="2xl" pX={5}>
        🌞
      </Text>

      <Text fontSize="2xl" pX={5}>
        🌙
      </Text>
    </Flex>
  </Flex>
);
