import { Heading, Flex, Spacer } from '@chakra-ui/react';
import { SwithWithIcons } from '../SwitchWithIcons/SwitchWithIcons';
import { Navigation } from '../Navigation/Navigation';
import { routes } from '../../constants';

export const Header = () => (
  <Flex
    paddingY={3}
    paddingX={5}
    // background="teal.50"
    position="sticky"
    top={0}
  >
    <Flex alignItems="center">
      <Heading size="md" color="gray.400">
        Radu G. Cîmpian
      </Heading>
    </Flex>
    <Navigation routes={routes} />
    <Spacer />
    <Flex flex={1} justifyContent="flex-end" alignItems="flex-end">
      <SwithWithIcons />
    </Flex>
  </Flex>
);
