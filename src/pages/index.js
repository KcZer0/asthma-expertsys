import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Button, Flex, Center, Box, VStack, Link } from '@chakra-ui/react';
import logoAsthma from '../assets/logo.png';

export default function Home() {
  return (
    <Center height="100vh" bgColor={'pink'}>
      <VStack spacing={'1rem'}>
        <Box width="20rem" height="20rem">
          <Image src={logoAsthma} />
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
