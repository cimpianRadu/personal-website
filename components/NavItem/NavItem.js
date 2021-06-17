import Link from 'next/link';
import { Text, Box } from '@chakra-ui/react';

export const NavItem = ({ href, isActive, title, onToggle }) => {
  return (
    <Box marginRight={[0, 10, 0]} marginLeft={[0, 10, 0]}>
      <Link href={href}>
        <a>
          <Text
            w="max-content"
            decoration={isActive ? 'underline' : 'none'}
            onClick={() => onToggle(href)}
            fontSize={isActive ? 'xl' : 'sm'}
          >
            {title}
          </Text>
        </a>
      </Link>
    </Box>
  );
};
