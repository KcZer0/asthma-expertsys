import { Button, Center, Box, VStack, Link } from '@chakra-ui/react';

import Image from 'next/image';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Center height="100vh" bgColor="#dbbdad">
      <VStack spacing={'1rem'}>
        <Box width="20rem" height="20rem" position="relative">
          <Image src="/images/logo.png" alt="Logo" fill />
        </Box>
        <NextLink href="/eval" legacyBehavior passHref>
          <Button
            as={Link}
            colorScheme="teal"
            px="5rem"
            sx={{
              ':hover': {
                textDecorationLine: 'none',
              },
            }}
          >
            Get Started
          </Button>
        </NextLink>
      </VStack>
    </Center>
  );
}
