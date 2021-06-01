import { Flex, Text, Divider } from '@chakra-ui/react';

export const TimeInterval = ({
  start = '2002-12-09',
  end = '2121-22-22',
  dividerOrientation = 'vertical',
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="left"
      alignItems="left"
      w="fit-content"
      padding="8px 4px"
    >
      <Text as="b">{start}</Text>
      <Divider
        h="120px"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        orientation={dividerOrientation}
      />
      <Text as="b">{end}</Text>
    </Flex>
  );
};
