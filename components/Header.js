import { Heading, Flex, Spacer } from '@chakra-ui/react';
import { SwithWithIcons } from './SwitchWithIcons/SwitchWithIcons';

export const Header = () => (
  <Flex paddingY={3} paddingX={5} background="teal.50">
    <Flex alignItems="center">
      <Heading size="md" color="gray.800">
        Radu G. Cîmpian
      </Heading>
    </Flex>
    <Spacer />
    <Flex
      flex={1}
      justifyContent="flex-end"
      alignItems="flex-end"
      paddingRight={10}
    >
      <SwithWithIcons />
    </Flex>
  </Flex>
);
