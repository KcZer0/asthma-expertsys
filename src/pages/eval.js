import {
  Box,
  Flex,
  Stack,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import symptoms from '@/data/symptoms';

const ButtonRadio = ({ active, children, ...p }) => (
  <Button
    borderColor="blackAlpha.400"
    colorScheme="teal"
    variant={active ? 'solid' : 'outline'}
    {...p}
  >
    {children}
  </Button>
);

export default function Form() {
  const [formState, setFormState] = useState(symptoms);
  useEffect(() => {
    setFormState((state) => {
      for (let i in state) {
        state[i].active = 0;
      }
      return { ...state };
    });
  }, []);

  const handleRadio = (name, idx) => () => {
    setFormState((state) => {
      state[name].active = idx;
      return { ...state };
    });
  };

  const [shown, setShown] = useState(true);
  const toggleShown = () => setShown(!shown);

  const transition = {
    ease: 'easeInOut',
    duration: 0.35,
    height: { duration: 0.75 },
  };
  const animation = {
    show: {
      height: 'auto',
      opacity: 1,
      transition,
    },
    hide: {
      height: '0',
      opacity: 0,
      transition,
    },
  };

  const handleSubmit = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(toggleShown, 800);
  };

  return (
    <Flex
      w="100%"
      minH="100vh"
      bgImg="/images/bg.png"
      bgSize="cover"
      justifyContent={{ base: 'center', md: 'end' }}
    >
      <Flex
        bgColor="white"
        mx="5vw"
        my="3rem"
        px="1rem"
        py="3rem"
        minW={{ base: '88vw', md: '60vw' }}
        minH="100%"
        borderRadius="30px"
        boxShadow="7px 8px 10px 2px rgba(0,0,0,0.7)"
      >
        <Box
          as={motion.div}
          w="100%"
          mx={{ base: '12%', md: '2.5rem' }}
          animate={shown ? animation.show : animation.hide}
          overflowY="hidden"
        >
          <VStack as="form" spacing={{ base: 14, md: 12 }}>
            {Object.keys(symptoms).map((name, sidx) => {
              const symptom = symptoms[name];
              return (
                <FormControl as="fieldset" key={name}>
                  <FormLabel as="legend">{symptom.desc}</FormLabel>
                  <Input name={symptom.name} type="hidden" defaultValue="0" />
                  <Stack
                    spacing={{ base: '.5rem', md: '1rem' }}
                    direction={{ base: 'column', md: 'row' }}
                  >
                    {symptom.options.map((opt, oidx) => (
                      <ButtonRadio
                        key={'s' + sidx + 'o' + oidx}
                        minW={oidx > 0 ? '5.25rem' : '4.25rem'}
                        borderWidth="1px"
                        active={formState[name].active == oidx}
                        onClick={handleRadio(name, oidx)}
                      >
                        {opt}
                      </ButtonRadio>
                    ))}
                  </Stack>
                </FormControl>
              );
            })}
            <Button colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}
