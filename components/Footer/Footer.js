import { Flex, Box } from '@chakra-ui/layout';
import { NavigationMobile } from '../NavigationMobile/NavigationMobile';
import { routes } from '../../constants';

export const Footer = () => {
  return (
    <>
      <Flex flex={1}>
        <Box display={['flex', 'flex', 'none']}>
          <NavigationMobile routes={routes} />
        </Box>
      </Flex>
    </>
  );
};
