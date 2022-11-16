import {
  Box,
  Flex,
  VStack,
  FormControl,
  RadioGroup,
  HStack,
  Radio,
  FormLabel,
  FormHelperText,
  Button,
  Spacer,
  Center,
  Stack,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import logoAsthma from '../assets/logo.png';

export default function Form() {
  const pertanyaan = [
    'Excessive mucus production',
    'Coughing happens once in a while in a day',
    'Trouble breathing (accompanied with or without whistling sound)',
    'Chest tightening',
    'Attacks happen less than or once in a week',
    'Night-time attack happens less than twice in a month',
    'No disturbance during sleep',
    'No disturbance during activity',
    'Coughing happens a few times in a day',
    'Trouble breathing with whistling sound',
    'Attacks happen more than once in a week',
    'Night-time attack happens around twice in a month',
    'A minor disturbance during sleep',
    'A minor disturbance during activity',
    'Coughing continuously',
    'Attacks happen almost every day in a week',
    'Night-time attack happens between 3 or 6 times in a month',
    'Trouble while sleeping',
    'Limited activity',
  ];
  const jawaban = [
    {
      value: 'dy',
      label: 'Definitely Yes',
    },
    {
      value: 'my',
      label: 'Maybe Yes',
    },
    {
      value: 'u',
      label: 'Unsure',
    },
    {
      value: 'mn',
      label: 'Maybe No',
    },
    {
      value: 'dn',
      label: 'Definitely No',
    },
  ];

  return (
    <Flex w="100%" minHeight="100vh">
      <Box w="50%" bgColor="LightBlue">
        <Image src={logoAsthma} width="2000" height="2000" />
      </Box>
      <Center width="50%">
        <VStack as="form" alignItems="flex-end" my="2rem" mx="2rem">
          {pertanyaan.map((pert, index) => (
            <FormControl as="fieldset" key={index}>
              <FormLabel as="legend">{pert}</FormLabel>
              <RadioGroup defaultValue="u">
                <Stack spacing="24px" direction={{ base: 'column', xl: 'row' }}>
                  {jawaban.map((jaw, index) => (
                    <Radio key={index} value={jaw.value}>
                      {jaw.label}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </FormControl>
          ))}
          <Flex>
            <Spacer></Spacer>
            <Link href="/result">
              <Button>Submit</Button>
            </Link>
          </Flex>
        </VStack>
      </Center>
    </Flex>
  );
}
