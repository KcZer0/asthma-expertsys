import {
  Center,
  Flex,
  Spacer,
  Stack,
  VStack,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import React from 'react';
import { pertanyaan, jawaban } from '@/data/questions';

export default function Form() {
  return (
    <Flex
      w="100%"
      minH="100vh"
      position="relative"
      bgImg="/assets/asthma.png"
      bgSize="cover"
      justifyContent="right"
    >
      <Center
        position="relative"
        bgColor="white"
        margin="40px"
        borderRadius="30px"
        boxShadow="9px 10px 5px 0px rgba(0,0,0,0.75)"
      >
        <VStack as="form" alignItems="flex-end" my="2rem" mx="2rem">
          {pertanyaan.map((pert, index) => (
            <FormControl as="fieldset" key={index}>
              <FormLabel as="legend">{pert}</FormLabel>
              <RadioGroup defaultValue="u">
                <Stack spacing="24px" direction={{ base: 'column', xl: 'row' }}>
                  {jawaban.map((jaw, index) => (
                    <Radio
                      key={index}
                      value={jaw.value}
                      colorScheme="teal"
                      borderColor="black"
                    >
                      {jaw.label}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </FormControl>
          ))}
          <Flex>
            <Spacer></Spacer>
            <Button colorScheme="teal">Submit</Button>
          </Flex>
        </VStack>
      </Center>
    </Flex>
  );
}
