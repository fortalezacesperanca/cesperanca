import {
  Alert,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { css } from '@emotion/css';
import { RiMapPin2Fill } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { Anchor } from '../../components/Anchor';
import { useColorModeValue } from '../../components/ColorMode';
import { Map } from '../../components/Map';
import { Widget } from '../../components/Widget';
import { useConfig, useConfigContext } from '../../contexts/ConfigContext';
import { useJSON } from '../../hooks/useJSON';

export default function MapWidget() {
  var [global] = useJSON<Model.Global>({
    json: 'db/global.json',
    defaultValue: [],
  });

  var [config] = useConfig();
  const { isMapPrivacyAccepted, acceptMapPrivacy, declineMapPrivacy } =
    useConfigContext();

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

  console.log({ config });

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

        <Alert.Root
          my={2}
          status="info"
          colorPalette={'accent'}
        >
          <Alert.Indicator />
          <Alert.Title>
            <p>
              Ao clicar em “Aceitar e Exibir Mapa”, você consente com a
              utilização de cookies de terceiros do Google, conforme sua
              Política de Privacidade.
              <Anchor
                text="https://policies.google.com/privacy"
                href="https://policies.google.com/privacy"
                target="_blank"
              />
            </p>
          </Alert.Title>
        </Alert.Root>
        <Flex
          margin={'auto'}
          justifyContent={'center'}
        >
          <Button
            colorPalette={isMapPrivacyAccepted ? 'secondary' : 'accent'}
            onClick={() =>
              isMapPrivacyAccepted ? declineMapPrivacy() : acceptMapPrivacy()
            }
          >
            {isMapPrivacyAccepted
              ? 'Recusar e Esconder Mapa'
              : 'Aceitar e Exibir Mapa'}
          </Button>
        </Flex>
        {!isMapPrivacyAccepted && (
          <MapCard height={height}>
            <Image
              src="images/map.jpg"
              filter={' blur(2px)'}
              objectFit={'cover'}
              objectPosition={'center'}
              zoom={'5'}
              height={'100%'}
              width={'100%'}
            />
          </MapCard>
        )}
        {isMapPrivacyAccepted && (
          <MapCard height={height}>
            <Map
              address={global.address}
              className={style}
            />
          </MapCard>
        )}
      </Flex>
    </Widget>
  );
}

function MapCard({ children, height }: any) {
  return (
    <Box
      height={height}
      my={2}
      p={2}
      border={'1px solid'}
      borderColor={'bg.subtle'}
      bg={'bg'}
      boxShadow={'sm'}
      borderRadius={'md'}
      width={'100%'}
      overflow={'hidden'}
    >
      {children}
    </Box>
  );
}
