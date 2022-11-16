import { Button, Center, Link, VStack, Heading } from '@chakra-ui/react';
import React from 'react';

function result() {
  return (
    <Center height="100vh">
      <VStack>
        <Heading fontSize="15rem">Result</Heading>
        <Link href="/">
          <Button fontSize="6rem" py="4rem" colorScheme="teal">
            Menu
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}

export default result;
