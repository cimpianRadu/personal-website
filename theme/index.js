import { extendTheme } from '@chakra-ui/react';

// overided chakra components
import { Text } from './components/Text';

const overrides = {
  styles: {},
  borders: {},
  // Other foundational style overrides go here
  components: {
    Text,
    // Other components go here
  },
};
export default extendTheme(overrides);
