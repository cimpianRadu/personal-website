import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

export const NavigationMobile = ({ routes = [] }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        variant="outline"
        icon={<HamburgerIcon />}
      />
      <MenuList>
        {routes.map((route) => (
          <Link href={route.href} key={route.title}>
            <a>
              <MenuItem justifyContent="center">{route.title}</MenuItem>
            </a>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};
