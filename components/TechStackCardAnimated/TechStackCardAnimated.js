import React from 'react';
import { useSpring, interpolate, animated, useSprings } from 'react-spring';
import { Box } from '@chakra-ui/react';
import { techCards } from '../../constants';
import styles from './TechStackCardAnimated.module.css';

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
  const [springs, api] = useSprings(techCards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  return (
    <>
      {springs.map(({ x, y, rot, scale }, index) => {
        return (
          <animated.div
            key={techCards[index].label}
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
              <Box padding={4} border="1px">
                {techCards[index].label}
              </Box>
            </animated.div>
          </animated.div>
        );
      })}
    </>
  );
};
