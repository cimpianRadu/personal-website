import { Flex, Text, Divider } from '@chakra-ui/react';

export const TimeInterval = ({
  start = '2002-12-09',
  end = '2121-22-22',
  dividerOrientation = 'vertical',
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="150px"
      w="120px"
    >
      <Text as="b">{start}</Text>
      <Divider orientation={dividerOrientation} />
      <Text as="b">{end}</Text>
    </Flex>
  );
};
