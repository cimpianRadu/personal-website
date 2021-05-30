import { Center, Text } from '@chakra-ui/react';

export const TechStackCard = ({
  cardTitle = 'Card Title',
  cardContent = null,
  cardFooter = 'Card Footer',
}) => {
  return (
    <Center
      h="250px"
      w="450px"
      borderRadius="10"
      border="1px solid red"
      flexDirection="column"
      justifyContent="space-between"
      padding="4"
    >
      <Text>{cardTitle}</Text>
      {cardContent}
      {<Text>{cardFooter}</Text>}
    </Center>
  );
};
