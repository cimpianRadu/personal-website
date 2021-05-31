import { Flex, Text } from '@chakra-ui/layout';
import styles from '../styles/Home.module.css';
import { BulletItem } from '../components';

const Experience = () => (
  <Flex className={styles.container} flex={1}>
    <BulletItem title="CS Bachelor degree" />
  </Flex>
);

export default Experience;
