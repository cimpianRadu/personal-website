import { Flex, Box, Divider } from '@chakra-ui/react';
import { BulletItem, TimeInterval, BottomExpandableCard } from '../';
import { TIMELINE_ITEMS } from '../../assets/timeline-items';
export const TimeLine = ({ items = TIMELINE_ITEMS }) => {
  const isLastItem = (index) => index === items.length - 1;
  return items.map((item, index) => {
    return (
      <Box borderColor="blue" w={'100%'} padding="0 20px">
        <Flex
          key={`${item?.title}-${index}`}
          padding="4"
          flexDirection="row"
          alignItems="center"
        >
          <TimeInterval start={item.startTime} end={item.endTime} />
          <Flex flexDirection="column" justifyContent="center">
            <BulletItem title={item.title} />

            {/* <BottomExpandableCard text={item.content} /> */}
          </Flex>
        </Flex>
        {!isLastItem(index) && (
          <Divider padding="4px 0px" orientation="horizontal" />
        )}
      </Box>
    );
  });
};
