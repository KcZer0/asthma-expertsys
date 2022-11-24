import {
  Box,
  Flex,
  Stack,
  VStack,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import symptoms from '@/data/symptoms';
import asthmaType from '@/lib/inference';

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

  const resetForm = () => {
    setFormState(() => {
      let state = { ...symptoms };
      for (let i in state) {
        state[i].active = 0;
      }
      return state;
    });
  };
  useEffect(resetForm, []);

  const handleRadio = (name, idx) => () => {
    setFormState((state) => {
      state[name].active = idx;
      return { ...state };
    });
  };

  const [showForm, setShowForm] = useState(true);
  const toggleForm = () => setShowForm(!showForm);

  const transition = {
    ease: 'easeInOut',
    duration: 0.35,
    height: { duration: 0.75 },
  };
  const animForm = {
    show: {
      height: 'auto',
      opacity: 1,
      transition,
    },
    hide: {
      height: 0,
      opacity: 0,
      transition,
    },
  };

  const transitionResult = {
    ease: 'easeInOut',
    duration: 0.75,
    height: { duration: 0.35 },
  };
  const animResult = {
    show: {
      minWidth: '100%',
      width: 'min-content',
      height: 'auto',
      opacity: 1,
      transition: transitionResult,
    },
    hide: {
      minWidth: 0,
      width: 0,
      height: 0,
      opacity: 0,
      transition: transitionResult,
    },
  };

  const [showResult, setShowResult] = useState(false);
  const toggleResult = () => setShowResult(!showResult);

  const [result, setResult] = useState({ name: '', desc: '' });
  const handleSubmit = () => {
    const values = Object.values(formState).map((e) => e.active);
    const cfs = Object.values(formState).map((e) => e.cf);
    const result = asthmaType(values, cfs);

    if (null == result.type)
      setResult({
        name: `You don't have asthma`,
        desc: '',
      });
    else
      setResult({
        name: `You have asthma of type: ${result.info.name}`,
        desc: result.info.desc,
      });
    console.log(result);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(toggleForm, 800);
    setTimeout(toggleResult, 1600);
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
        width="min-content"
        minW={{ base: '88vw', md: '60vw' }}
        borderRadius="30px"
        boxShadow="7px 8px 10px 2px rgba(0,0,0,0.7)"
      >
        <Flex
          as={motion.div}
          justifyContent="center"
          alignItems="center"
          animate={showResult ? animResult.show : animResult.hide}
        >
          <Heading textAlign="center" width="fit-content">
            {result.name}
          </Heading>
          <Text>{result.desc}</Text>
        </Flex>
        <Box
          as={motion.div}
          w="100%"
          mx={{ base: '12%', md: '2.5rem' }}
          animate={showForm ? animForm.show : animForm.hide}
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
            <Button
              colorScheme="teal"
              onClick={handleSubmit}
              enabled={showForm}
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}
