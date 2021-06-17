import { useState } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import Markdown from 'markdown-to-jsx';

export const BottomExpandableCard = ({ text, shouldShowMore = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Box
      margin="0 8px"
      position="relative"
      padding="4px"
      w={[200, 500, 700]}
      height="fit-content"
      width="fit-content"
    >
      <Box h={isCollapsed ? '80px' : 'fit-content'} overflow="hidden">
        <Markdown>{text}</Markdown>
      </Box>
      <Box
        borderRadius="sm"
        minH={'22px'}
        height="fit-content"
        width={'100%'}
        position={isCollapsed ? 'absolute' : 'realtive'}
        bottom={0}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="4px 0"
          opacity="1"
          backgroundColor="transparent"
        >
          {shouldShowMore && (
            <Box opacity="1">
              <Text
                opacity="1"
                padding="4px"
                backgroundColor="twitter.200"
                borderRadius={5}
                onClick={() => setIsCollapsed(!isCollapsed)}
                as="b"
              >
                {isCollapsed ? 'View more' : 'Show less'}
              </Text>
            </Box>
          )}
        </Flex>
        <Box />
      </Box>
    </Box>
  );
};
