import {
  Heading,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { SwithWithIcons } from '../SwitchWithIcons/SwitchWithIcons';
import { Navigation } from '../Navigation/Navigation';
import { ROUTES } from '../../constants';

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const headerBackground = useColorModeValue('gray.200', 'gray.900');
  return (
    <Flex
      paddingY={3}
      paddingX={5}
      background={headerBackground}
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Flex alignItems="center">
        <Heading color="blue.500" fontFamily="cursive" size="md">
          Radu G. Cîmpian
        </Heading>
      </Flex>
      <Navigation routes={ROUTES} />
      <Spacer />
      <Flex flex={1} justifyContent="flex-end" alignItems="flex-end">
        <SwithWithIcons onChange={toggleColorMode} />
      </Flex>
    </Flex>
  );
};
