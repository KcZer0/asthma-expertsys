import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const LinkButton = ({ href, children, ...p }) => (
  <NextLink href={href} legacyBehavior passHref>
    <Button
      as={Link}
      colorScheme="teal"
      sx={{
        ':hover': {
          textDecorationLine: 'none',
        },
      }}
      {...p}
    >
      {children}
    </Button>
  </NextLink>
);
export default LinkButton;
