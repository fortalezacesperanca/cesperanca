import { Box, Flex, Icon, Menu, Portal, Text } from '@chakra-ui/react';

import type React from 'react';
import { forwardRef } from 'react';
import {
  RiCalendar2Fill,
  RiCalendarScheduleFill,
  RiGroup3Fill,
  RiHeart2Fill,
  RiHomeHeartFill,
  RiMapPin2Fill,
  RiMoreFill,
  RiPlayLargeFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import type { Model } from '../../../domain/model';
import If from '../../components/If';
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
  Eventos: (
    <IconWithShadow>
      <RiCalendarScheduleFill />
    </IconWithShadow>
  ),
  Grupos: (
    <IconWithShadow>
      <RiGroup3Fill />
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
  Mais: (
    <IconWithShadow>
      <RiMoreFill />
    </IconWithShadow>
  ),
};

export const NavigationMobileWidget = ({ path }: { path: string }) => {
  var [menu] = useJSON<Model.Menu>({ json: path, defaultValue: [] });

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
            <>
              <If condition={item.link != null}>
                <MenuLink item={item} />
              </If>
              <If condition={item.link == null}>
                <MoreMenuItem item={item} />
              </If>
            </>
          );
        })}
      </Flex>
    </Flex>
  );
};

export function MoreMenuItem({ item }: { item: Model.MenuItem }) {
  return (
    <Menu.Root size={'md'}>
      <Menu.Trigger width={'100%'}>
        <MenuItem item={item} />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner
          // border={'1px solid red'}
          bg={'primary'}
        >
          <Menu.Content
            overflow={'hidden'}
            bg={'primary.bg'}
          >
            {item.children?.map((subitem) => {
              return (
                <Menu.Item
                  value={subitem.text}
                  key={subitem.text}
                  _focus={{
                    outline: 'none',
                  }}
                  _hover={{
                    bg: 'transparent',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                >
                  <MenuLink item={subitem} />
                </Menu.Item>
              );
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export const MenuItem = forwardRef(function (
  props: {
    item: Model.MenuItem;
  },
  ref,
) {
  return (
    <Box
      ref={ref} // 👈 precisa repassar
      {...props} // 👈 precisa espalhar
      bg={'primary.bg'}
      color="gray.50"
      fontFamily={'FontHeading'}
      fontWeight={'bold'}
      fontSize={'md'}
      paddingY={2}
      _hover={{
        bg: 'primary.800',
      }}
      _active={{
        bg: 'primary.400',
      }}
      _focus={{
        outline: 'none',
      }}
      // border={'3px solid red'}
      width={'100%'}
    >
      <Flex
        direction={'column'}
        alignItems={'center'}
      >
        {navigationIcons[props.item.text]}
        <Text
          textAlign={'center'}
          textShadow={'textsm'}
        >
          {props.item.text}
        </Text>
      </Flex>
    </Box>
  );
});

export function MenuLink({ item }: { item: Model.MenuItem }) {
  return (
    <Link
      key={item.text}
      to={item.link!}
      style={{
        // border: '3px solid yellow',
        // display: 'inline-flex',
        // padding: 0,
        // margin: 0,
        // flexGrow: 1,
        // justifyContent: 'center',
        width: '100%',
      }}
    >
      <MenuItem item={item} />
    </Link>
  );
}
