import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { RiMapPin2Fill } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { Map } from '../../components/Map';
import { Widget } from '../../components/Widget';
import { useJSON } from '../../hooks/useJSON';

export default function MapWidgetV3() {
  var [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: [],
  });

  const height = useBreakpointValue({
    base: '400px',
    md: '500px',
  });

  return (
    <Widget
      title="Onde estamos?"
      icon={<RiMapPin2Fill />}
      showActionButton={false}
    >
      <Flex
        flexDirection={'column'}
        width={'100%'}
      >
        <Box py={2}>
          <Text>{global.address}</Text>
        </Box>
        <Box
          p={2}
          border={'1px solid'}
          bg={'gray.50'}
          borderColor={'gray.300'}
          boxShadow={'sm'}
          borderRadius={'md'}
          width={'100%'}
        >
          <Map
            address={global.address}
            height={height}
          />
        </Box>
      </Flex>
    </Widget>
  );
}
