import { Flex, Divider } from '@chakra-ui/react';
import { BulletItem, TimeInterval, BottomExpandableCard } from '../';
import { TIMELINE_ITEMS } from '../../assets/timeline-items';
export const TimeLine = ({ items = TIMELINE_ITEMS }) => {
  return items.map((item, index) => {
    return (
      <>
        <Flex
          key={`${item?.title}-${index}`}
          padding="4"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          // backgroundColor="red.200"
        >
          <TimeInterval start={item.startTime} end={item.endTime} />
          <Flex flexDirection="column">
            <BulletItem title={item.title} />

            <BottomExpandableCard text={item.content} />
          </Flex>
        </Flex>
        <Divider padding="4px 0" orientation="horizontal" />
      </>
    );
  });
};
