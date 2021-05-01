import { extendTheme } from '@chakra-ui/react';

// overided chakra components
import { Text } from './components/Text';
import { Heading } from './components/Heading';

const overrides = {
  styles: {},
  borders: {},
  // Other foundational style overrides go here
  components: {
    Text,
    Heading,
    // Other components go here
  },
};
export default extendTheme(overrides);
