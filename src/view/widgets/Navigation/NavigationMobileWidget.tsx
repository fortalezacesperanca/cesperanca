import { Button, Flex, Icon, Menu, Portal, Text } from '@chakra-ui/react';

import type React from 'react';
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
      color="fg"
      shadow="mdreverse"
      // py={4}
      width={'100dvw'}
      height={'72px'}
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
        <Menu.Positioner>
          <Menu.Content
            overflow={'hidden'}
            bg="primary.700"
          >
            {item.children?.map((subitem) => {
              return (
                <Menu.Item
                  value={subitem.text}
                  key={subitem.text}
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

export const MenuItem = function (props: { item: Model.MenuItem }) {
  return (
    <Button
      // ref={ref} // 👈 precisa repassar
      // {...props} // 👈 precisa espalhar
      bg={'transparent'}
      color="gray.50"
      fontFamily={'FontHeading'}
      fontWeight={'bold'}
      h={'16'}
      textStyle={'md'}
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
      >
        {navigationIcons[props.item.text]}
        <Text
          textAlign={'center'}
          textShadow={'textsm'}
        >
          {props.item.text}
        </Text>
      </Flex>
    </Button>
  );
};

export function MenuLink({ item }: { item: Model.MenuItem }) {
  return (
    <Link
      key={item.text}
      to={item.link!}
      style={{
        width: '100%',
      }}
    >
      <MenuItem item={item} />
    </Link>
  );
}
