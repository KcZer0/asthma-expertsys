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

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeadTitle from '@/components/HeadTitle';
import LinkButton from '@/components/LinkButton';

import asthma from '@/data/asthma-desc';
import symptoms from '@/data/symptoms';
import asthmaType from '@/lib/inference';

const ButtonRadio = ({ active, children, ...p }) => (
  <Button
    borderColor="blackAlpha.400"
    colorScheme="teal"
    variant={active ? 'solid' : 'outline'}
    p="1rem"
    fontSize={{ md: '.88rem', lg: '1rem' }}
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
    height: { duration: 0.65 },
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
    width: { duration: 0 },
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

  const [result, setResult] = useState({
    text: '',
    type: '',
    desc: '',
    prob: null,
  });
  const handleSubmit = () => {
    const values = Object.values(formState).map((e) => e.active);
    const cfs = Object.values(formState).map((e) => e.cf);
    const result = asthmaType(values, cfs);

    if (null == result.type)
      setResult({
        text: `You don't have asthma`,
        type: undefined,
        description: undefined,
        desc: 'Thank you for using this app',
        prob: null,
      });
    else
      setResult({
        text: `You have asthma of type: `,
        type: result.info.name,
        description: result.info.description,
        desc: result.info.desc,
        prob: result.prob,
      });
    console.log(result);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(toggleForm, 800);
    setTimeout(toggleResult, 1600);
  };

  const tableNotes = (num) => {
    const adjectives = [
      'Unlikely',
      'Might',
      'Possibly',
      'Likely',
      'Definitely',
    ];
    let n = parseInt(Number(num) / 0.2);
    if (n > 4) n = 4;

    const adj = adjectives[n];
    return `You "${adj}" have the asthma type`;
  };

  return (
    <Flex
      w="100%"
      minH="100vh"
      bgImg="/images/bg.png"
      bgSize="cover"
      justifyContent={{ base: 'center', md: 'end' }}
    >
      <HeadTitle />
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
          flexDir="column"
          as={motion.div}
          justifyContent="center"
          alignItems="center"
          opacity="0"
          animate={showResult ? animResult.show : animResult.hide}
        >
          <Heading textAlign="center" width="fit-content" pb=".5rem">
            {result.text}
            <br />
            {result.type ?? undefined}
          </Heading>
          <br />
          <Stack
            direction="column"
            spacing={4}
            px="5vw"
            textAlign="justify"
            pb=".5rem"
          >
            {Array.isArray(result.desc)
              ? result.desc.map((e, i) => <Text key={`desc-${i}`}>{e}</Text>)
              : undefined}
          </Stack>
          {Array.isArray(result.prob) ? (
            <TableContainer>
              <Table variant="simple" size={{ base: 'sm', md: 'md' }}>
                <TableCaption placement="top">Our calculation</TableCaption>
                <TableCaption placement="bottom">
                  (result: highest type, where cf &gt; 0.85)
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Type</Th>
                    <Th isNumeric>cf</Th>
                    <Th>Notes</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {result.prob.map((e, i) => (
                    <Tr key={asthma[i].name}>
                      <Td>{asthma[i].name}</Td>
                      <Td isNumeric>{Number(e).toFixed(5)}</Td>
                      <Td>{tableNotes(e)}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot />
              </Table>
            </TableContainer>
          ) : undefined}
          <LinkButton href="/" mt="1.5rem">
            Back to Home
          </LinkButton>
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
