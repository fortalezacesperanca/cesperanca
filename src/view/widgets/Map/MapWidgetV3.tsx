import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { css } from '@emotion/css';
import { RiMapPin2Fill } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { useColorModeValue } from '../../components/ColorMode';
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

  const style = useColorModeValue(
    css`
      filter: invert(0%);
    `,
    css`
      filter: invert(100%) contrast(80%);
    `,
  );

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
          borderColor={'bg.subtle'}
          bg={'bg.emphasized'}
          boxShadow={'sm'}
          borderRadius={'md'}
          width={'100%'}
        >
          <Map
            address={global.address}
            height={height}
            className={style}
          />
        </Box>
      </Flex>
    </Widget>
  );
}
