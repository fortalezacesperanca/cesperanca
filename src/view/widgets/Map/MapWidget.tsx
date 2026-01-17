import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { RiMapPin2Fill } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { Map } from '../../components/Map';
import { WidgetTitle } from '../../components/WidgetTitle';
import { useJSON } from '../../hooks/useJSON';

export default function MapWidget() {
  var [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: [],
  });

  const height = useBreakpointValue({
    base: '400px',
    md: '500px',
  });

  return (
    <Flex
      direction="column"
      width={'100%'}
    >
      <Flex py={2}>
        <WidgetTitle
          text={'Onde estamos?'}
          icon={<RiMapPin2Fill />}
        />
      </Flex>
      <Flex py={2}>
        <Text>{global.address}</Text>
      </Flex>
      <Flex
        p={2}
        border={'1px solid'}
        bg={'gray.50'}
        borderColor={'gray.300'}
        boxShadow={'sm'}
        borderRadius={'md'}
      >
        <Map
          address={global.address}
          height={height}
        />
      </Flex>
    </Flex>
  );
}
