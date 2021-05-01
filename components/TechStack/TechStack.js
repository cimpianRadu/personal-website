import { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { TechStackCard } from '../TechStackCard/TechStackCard';

export const TechStack = ({ sectionTitle = 'Tech stack 🥞' }) => {
  const [sholdDisplayStack, setShouldDisplayStack] = useState(false);
  return (
    <>
      <Heading
        onMouseEnter={() => {
          setShouldDisplayStack(true);
        }}
      >
        {sectionTitle}
      </Heading>
      {sholdDisplayStack && <TechStackCard />}
    </>
  );
};
