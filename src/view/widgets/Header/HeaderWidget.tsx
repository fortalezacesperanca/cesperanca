import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Switch,
  Text,
} from '@chakra-ui/react';

function SimpleHeading({ title }: { title: string }) {
  return (
    <Heading
      color="gray.50"
      as="h1"
      size={'3xl'}
      textAlign={'center'}
    >
      {title}
    </Heading>
  );
}

import React from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { useColorMode } from '../../components/ColorMode';
import { useJSON } from '../../hooks/useJSON';

export const HeaderWidget = ({ logo }: { logo?: React.ReactNode }) => {
  var [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: [],
  });

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      bgGradient="to-b"
      gradientFrom="accent.400"
      gradientTo="primary.600"
      w={'100%'}
      p={4}
    >
      <Container
        m={'auto'}
        p={0}
      >
        <Flex
          flex={1}
          justifyContent={{ mdDown: 'center', lgDown: 'center' }}
          flexWrap={'wrap'}
          margin={'auto'}
          width={'fit-content'}
        >
          <Center p={2}>
            {logo ? logo : <SimpleHeading title={global.title} />}
          </Center>
          <Center
            p={2}
            hidden
          >
            <Text
              as="i"
              color="gray.200"
              textShadow={'textsm'}
              textAlign={{ mdDown: 'center', lg: 'flex-start' }}
              fontSize={{ sm: '3xl', md: '4xl' }}
              fontWeight={'initial'}
            >
              {global.subtitle}
            </Text>
          </Center>
        </Flex>
        <Flex justifyContent={'flex-end'}>
          <Box>
            <Switch.Root
              name="colormodeswitch"
              size={'lg'}
              onChange={toggleColorMode}
              checked={colorMode == 'dark'}
            >
              {/* <Switch.Label color="gray.200">Mudar Tema</Switch.Label> */}
              <Switch.HiddenInput />
              <Icon
                color="gray.50"
                textShadow={'textsm'}
              >
                <RiSunFill />
              </Icon>
              <Switch.Control bg={'bg.muted'}>
                <Switch.Thumb bg={'bg.solid'} />
              </Switch.Control>
              <Icon
                color="gray.50"
                textShadow={'textsm'}
              >
                <RiMoonFill />
              </Icon>
            </Switch.Root>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};
