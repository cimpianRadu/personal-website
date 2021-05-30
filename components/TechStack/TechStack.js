import { useState, useEffect } from 'react';
import { Spacer } from '@chakra-ui/react';
import { TechStackCardAnimated } from '../TechStackCardAnimated/TechStackCardAnimated';

export const TechStack = () => {
  const [sholdDisplayStack, setShouldDisplayStack] = useState(false);

  useEffect(() => {
    setTimeout(setShouldDisplayStack(true), 5000);
  }, []);
  return (
    <>
      <Spacer />
      {sholdDisplayStack && <TechStackCardAnimated />}
    </>
  );
};
