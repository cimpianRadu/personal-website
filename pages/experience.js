import { Flex, Text } from '@chakra-ui/layout';
import styles from '../styles/Home.module.css';
import { BulletItem, TimeInterval } from '../components';

const Experience = () => (
  <Flex padding="4">
    <TimeInterval />
    <Flex flexDirection="column" className={styles.container} flex={1}>
      <BulletItem title="CS Bachelor degree" />
    </Flex>
  </Flex>
);

export default Experience;
