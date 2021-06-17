import { Flex } from '@chakra-ui/react';
import { TimeLine } from '../components';
import { TIMELINE_ITEMS } from '../assets/timeline-items';

const Experience = () => (
  <Flex flex={1} minHeight="full" alignItems="center" flexDirection="column">
    <TimeLine items={TIMELINE_ITEMS} />
  </Flex>
);

export default Experience;
