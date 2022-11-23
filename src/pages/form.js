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

import symptoms from '@/data/symptoms';

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
          {symptoms.map((symptom, sidx) => (
            <FormControl as="fieldset" key={symptom.name}>
              <FormLabel as="legend">{symptom.desc}</FormLabel>
              <RadioGroup name={symptom.name} defaultValue="0">
                <Stack spacing="24px" direction={{ base: 'column', xl: 'row' }}>
                  {symptom.options.map((opt, oidx) => (
                    <Radio
                      key={'s' + sidx + 'o' + oidx}
                      value={`${oidx}`}
                      colorScheme="teal"
                      borderColor="black"
                    >
                      {opt}
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
