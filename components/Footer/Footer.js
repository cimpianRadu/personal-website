import { Flex, Box, Divider, Text, Spacer, HStack } from '@chakra-ui/layout';
import { NavigationMobile } from '../NavigationMobile/NavigationMobile';
import { ROUTES, SOCIAL_MEDIA_URL } from '../../constants';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <footer>
      <Divider orientation="horizontal" />
      <Flex flex={1} paddingY={5} paddingX={5} alignItems="center">
        <Box display={['flex', 'flex', 'none']}>
          <NavigationMobile routes={ROUTES} />
        </Box>
        <HStack spacing={10}>
          <SocialIcon
            url={SOCIAL_MEDIA_URL.LINKEDIN}
            bgColor="#0070f3"
            fgColor="white"
          />
          <SocialIcon
            url={SOCIAL_MEDIA_URL.GITHUB}
            bgColor="black"
            fgColor="white"
          />
          <SocialIcon
            url={SOCIAL_MEDIA_URL.TWEETER}
            bgColor="#1ea2f1"
            fgColor="white"
          />
        </HStack>
        <Spacer />
        <Text color="gray.200" fontFamily="cursive" fontSize="xl">
          Made in 🇷🇴
        </Text>
      </Flex>
    </footer>
  );
};
