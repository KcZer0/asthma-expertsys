import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Button, Flex, Center, Box, VStack, Link, Img } from '@chakra-ui/react';

export default function Home() {
  return (
    <Center height="100vh" bgColor="#c0ab9e">
      <VStack spacing={'1rem'}>
        <Box width="20rem" height="20rem">
          <Img src="/assets/logo.png" />
        </Box>
        <Link href="/form">
          <Button colorScheme="teal" px={'5rem'}>
            Get Started
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}
