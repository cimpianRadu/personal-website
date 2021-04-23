import {
  Flex,
  Box,
  Divider,
  Text,
  HStack,
  Center,
  Link,
} from '@chakra-ui/react';
import { NavigationMobile } from '../NavigationMobile/NavigationMobile';
import { ROUTES, SOCIAL_MEDIA_URL } from '../../constants';
import { SocialIcon } from 'react-social-icons';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <Divider orientation="horizontal" />
      <Flex
        flex={1}
        paddingY={5}
        paddingX={5}
        alignItems="center"
        justifyContent="space-around"
        flexDirection={['column', 'column', 'row']}
      >
        <Box display={['flex', 'flex', 'none']}>
          <NavigationMobile routes={ROUTES} />
        </Box>
        <Flex alignItems="center">
          <Text
            fontSize="xl"
            color="gray.200"
            fontWeight="semibold"
            marginRight={8}
          >
            Let's get in touch!
          </Text>
          <HStack spacing={8}>
            <SocialIcon
              url={SOCIAL_MEDIA_URL.LINKEDIN.url}
              label={SOCIAL_MEDIA_URL.LINKEDIN.label}
              bgColor="#0070f3"
              fgColor="white"
              className={styles.socialMediaIcons}
            />
            <SocialIcon
              url={SOCIAL_MEDIA_URL.GITHUB.url}
              label={SOCIAL_MEDIA_URL.GITHUB.label}
              bgColor="black"
              fgColor="white"
              className={styles.socialMediaIcons}
            />
            <SocialIcon
              url={SOCIAL_MEDIA_URL.TWEETER.url}
              label={SOCIAL_MEDIA_URL.TWEETER.label}
              bgColor="#1ea2f1"
              fgColor="white"
              className={styles.socialMediaIcons}
            />
          </HStack>
        </Flex>
        <Flex
          display={['block', 'block', 'flex', 'flex']}
          justifyContent="-moz-initial"
          alignItems="center"
        >
          <Box textAlign="center">
            <EmailIcon w={6} h={6} marginRight={1} color="gray.200" />
            <Link color="gray.200" href="mailto:radu.cimpian94@gmail.com">
              radu.cimpian94@gmail.com
            </Link>
          </Box>
          <Center height={10} marginX={4}>
            <Divider orientation="vertical" />
          </Center>
          <Box textAlign="center">
            <PhoneIcon w={5} h={5} color="gray.200" />
            <Link color="gray.200" href="tel:+40-075-154-7174">
              +40 (075) 154-7174
            </Link>
          </Box>
        </Flex>
        <Box>
          <Text
            color="gray.200"
            fontFamily="cursive"
            fontSize="xl"
            fontWeight="semibold"
          >
            Made in 🇷🇴
          </Text>
        </Box>
      </Flex>
    </footer>
  );
};
