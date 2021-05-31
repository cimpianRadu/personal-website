import { extendTheme } from '@chakra-ui/react';

// overided chakra components
import { Text } from './components/Text';
import { Heading } from './components/Heading';
import { Box } from './components/Box';

const overrides = {
  styles: {},
  borders: {},
  // Other foundational style overrides go here
  components: {
    Text,
    Heading,
    Box,
    // Other components go here
  },
};
export default extendTheme(overrides);
