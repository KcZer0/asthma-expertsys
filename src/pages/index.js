import { Box, Center, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import LinkButton from '@/components/LinkButton';
import HeadTitle from '@/components/HeadTitle';

export default function Home() {
  return (
    <Center height="100vh" bgColor="#dbbdad">
      <HeadTitle />
      <VStack spacing={'1rem'}>
        <Box width="20rem" height="20rem" position="relative">
          <Image src="/images/logo.png" alt="Logo" fill />
        </Box>
        <LinkButton href="/eval" px="4rem">
          Get Started
        </LinkButton>
      </VStack>
    </Center>
  );
}
