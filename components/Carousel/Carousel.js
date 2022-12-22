import { useState } from "react";
import { IconButton, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { CAROUSEL_ITEM_TYPES } from "../../constants";

export const Carousel = ({ items = [], type = CAROUSEL_ITEM_TYPES.CARD }) => {
  const [currentFocusedIndex, setCurrentFocusedIndex] = useState(0);

  const onPressLeft = (event) => {
    event.preventDefault();
    setCurrentFocusedIndex(currentFocusedIndex - 1);
  };

  const onPressRight = (event) => {
    event.preventDefault();
    setCurrentFocusedIndex(currentFocusedIndex + 1);
  };

  switch (type) {
    case CAROUSEL_ITEM_TYPES.CARD:
      return (
        <>
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <IconButton aria-label="left-arrow" icon={<ChevronLeftIcon w={12} h={12} />} size="lg" onClick={onPressLeft} disabled={currentFocusedIndex === 0} />
            <IconButton
              aria-label="right arrow"
              icon={<ChevronRightIcon w={12} h={12} />}
              size="lg"
              onClick={onPressRight}
              disabled={currentFocusedIndex === items.length}
            />
          </Flex>
        </>
      );

    default:
      return <> </>;
  }
};
