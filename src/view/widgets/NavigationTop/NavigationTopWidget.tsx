import { Button, Flex } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import type { Model } from '../../../domain/model';
import { useJSON } from '../../hooks/useJSON';

export const NavigationTopWidget = ({ path }: { path: string }) => {
  var [menu] = useJSON<Model.Menu>({ path, defaultValue: [] });

  return (
    <Flex
      bg="primary.700"
      justifyContent={'center'}
      py={2}
      gap={2}
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
            }}
          >
            <Button
              bg={'transparent'}
              fontFamily={'FontHeading'}
              fontWeight={'bold'}
              fontSize={'md'}
              color="gray.50"
              textShadow={'textsm'}
              _hover={{
                bg: 'primary.800',
              }}
              _active={{
                bg: 'primary.400',
              }}
            >
              {item.text}
            </Button>
          </Link>
        );
      })}
    </Flex>
  );
};
