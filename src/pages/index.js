import { Button, Center, Box, VStack, Link } from '@chakra-ui/react';

import Image from 'next/image';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Center height="100vh" bgColor="#dbbdad">
      <VStack spacing={'1rem'}>
        <Box width="20rem" height="20rem" position="relative">
          <Image src="/assets/logo.png" alt="logo" fill />
        </Box>
        <NextLink href="/form" legacyBehavior passHref>
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
