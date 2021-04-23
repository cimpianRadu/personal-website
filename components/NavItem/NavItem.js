import Link from 'next/link';
import { Text } from '@chakra-ui/react';

export const NavItem = ({ href, isActive, title, onToggle }) => {
  return (
    <>
      <Link href={href}>
        <a>
          <Text
            decoration={isActive ? 'underline' : 'none'}
            onClick={() => onToggle(href)}
            fontSize={isActive ? 'xl' : 'sm'}
          >
            {title}
          </Text>
        </a>
      </Link>
    </>
  );
};
