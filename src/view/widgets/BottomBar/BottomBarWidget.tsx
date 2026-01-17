import { Flex, Text } from '@chakra-ui/react';
import { version } from '../../../../package.json';
import type { Model } from '../../../domain/model';
import { useJSON } from '../../hooks/useJSON';

export const BottomBarWidget = () => {
  var [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: [],
  });

  const year = new Date().getFullYear();

  return (
    <Flex
      p={4}
      width={'full'}
      fontSize={'xs'}
      bg="primary.700"
      color={'gray.200'}
    >
      <Text
        flex={1}
        textShadow={'textmd'}
      >
        {global.title} - {year}
      </Text>
      <Text>Versão: {version}</Text>
    </Flex>
  );
};
