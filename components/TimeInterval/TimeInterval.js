import { Flex, Text, Divider, Box } from '@chakra-ui/react';

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
      <Text w="max-content" as="b">
        {start}
      </Text>
      <Divider
        h="50px"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        orientation={dividerOrientation}
      />
      <Text w="max-content" as="b">
        {end}
      </Text>
    </Flex>
  );
};
