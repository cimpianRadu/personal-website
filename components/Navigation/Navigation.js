import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { NavItem } from '../NavItem/NavItem';

export const Navigation = ({ routes = [] }) => {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <Flex
      flex={1}
      justifyContent="space-evenly"
      alignItems="center"
      direction="row"
    >
      {routes.map((route) => (
        <NavItem
          onToggle={setActiveLink}
          key={route.href}
          href={route.href}
          title={route.title}
          isActive={route.href === activeLink}
        />
      ))}
    </Flex>
  );
};
