import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import type React from 'react';
import {
  RiCalendar2Fill,
  RiHeart2Fill,
  RiHomeHeartFill,
  RiMapPin2Fill,
  RiPlayLargeFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import type { Model } from '../../../domain/model';
import { useJSON } from '../../hooks/useJSON';

const IconWithShadow = ({ children }: any) => {
  return (
    <Icon filter={'drop-shadow(var(--chakra-shadows-textxs))'}>{children}</Icon>
  );
};

const navigationIcons: Record<string, React.ReactNode> = {
  Início: (
    <IconWithShadow>
      <RiHomeHeartFill />
    </IconWithShadow>
  ),
  Agenda: (
    <IconWithShadow>
      <RiCalendar2Fill />
    </IconWithShadow>
  ),
  Ofertas: (
    <IconWithShadow>
      <RiHeart2Fill />
    </IconWithShadow>
  ),
  'Ao Vivo': (
    <IconWithShadow>
      <RiPlayLargeFill />
    </IconWithShadow>
  ),
  Endereço: (
    <IconWithShadow>
      <RiMapPin2Fill />
    </IconWithShadow>
  ),
};

export const NavigationWidget = ({ path }: { path: string }) => {
  var [menu] = useJSON<Model.Menu>({ path, defaultValue: [] });

  return (
    <Flex
      bg="primary.700"
      // bgGradient="to-b"
      // gradientFrom="accent.400"
      // gradientVia={"primary.600"}
      // gradientTo="primary.700"
      color="fg"
      shadow="mdreverse"
      p={2}
      width={'100dvw'}
    >
      <Flex
        justifyContent={'space-between'}
        width={'md'}
        margin={'auto'}
      >
        {menu.map((item) => {
          return (
            <Link
              key={item.text}
              to={item.link}
              style={{
                display: 'inline-flex',
                padding: 0,
                margin: 0,
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              <Box
                bg={'transparent'}
                color="gray.50"
                fontFamily={'FontHeading'}
                fontSize={'md'}
                paddingY={2}
                _hover={{
                  bg: 'primary.800',
                }}
                _active={{
                  bg: 'primary.400',
                }}
                width={'100%'}
              >
                <Flex
                  direction={'column'}
                  alignItems={'center'}
                  // boxShadow={}
                  // filter={'filter: drop-shadow(var(--chakra-shadows-textsm))'}
                  // textShadow={'textsm'}
                >
                  {navigationIcons[item.text]}
                  <Text
                    textAlign={'center'}
                    textShadow={'textsm'}
                  >
                    {item.text}
                  </Text>
                </Flex>
              </Box>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};
