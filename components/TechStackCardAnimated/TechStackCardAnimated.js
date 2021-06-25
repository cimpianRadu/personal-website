import React from 'react';
import { interpolate, animated, useSprings } from 'react-spring';
import { Box, Text } from '@chakra-ui/react';
import { TECH_CARDS } from '../../constants';
import styles from './TechStackCardAnimated.module.css';
import { useColorMode } from '@chakra-ui/react';

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, y: -70, rot: 0, scale: 1.2, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(0px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

export const TechStackCardAnimated = () => {
  const { colorMode } = useColorMode();
  const [springs, api] = useSprings(TECH_CARDS.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  return (
    <>
      {springs.map(({ x, y, rot, scale }, index) => {
        const isLast = index === springs.length - 1;
        return (
          <animated.div
            key={TECH_CARDS[index].label}
            className={styles.techStackCardContainer}
            style={{
              transform: interpolate(
                [x, y],
                (x, y) => `translate3d(${x}px,${y}px,-2px)`
              ),
            }}
          >
            <animated.div
              style={{
                transform: interpolate([rot, scale], trans),
              }}
            >
              <Box
                padding={4}
                border="1px"
                borderRadius="sm"
                className={`${styles.scaled} ${!isLast && styles.rise}`}
                backgroundColor={
                  colorMode === 'light' ? 'pink.200' : 'pink.800'
                }
              >
                <Text width="fit-content" fontWeight="bold">
                  {TECH_CARDS[index].label}
                </Text>
              </Box>
            </animated.div>
          </animated.div>
        );
      })}
    </>
  );
};
