import {
  Box,
  Clipboard,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { RiHeart2Fill } from 'react-icons/ri';
import { Model } from '../../../domain/model';
import { Image } from '../../components/Image';
import { Widget } from '../../components/Widget';
import { useJSON } from '../../hooks/useJSON';

export default function PixWidgetV3() {
  const [global] = useJSON<Model.Global>({
    json: 'db/global.json',
    defaultValue: {},
  });

  const key = global && global.pix ? global.pix.key : '';
  const bankName = global && global.pix ? global.pix.bankName : '';
  const accountName = global && global.pix ? global.pix.accountName : '';

  return (
    <Widget
      title="Ofertas"
      icon={<RiHeart2Fill />}
      showActionButton={false}
    >
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Flex
          justifyContent={'center'}
          width={'100%'}
          flexDirection={'row'}
        >
          <Clipboard.Root
            value={key}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Clipboard.Label
              textAlign={'center'}
              display={'block'}
            >
              <Heading fontSize={'lg'}>Chave Pix</Heading>
              <Flex
                justifyContent={'center'}
                p={4}
              >
                <Image
                  alt=""
                  width={'150px'}
                  src={'images/pix-banco-central.svg'}
                />
              </Flex>
              <Text fontSize={'md'}>{bankName}</Text>
              <Text fontSize={'md'}>{accountName}</Text>
            </Clipboard.Label>
            <InputGroup mt={2}>
              <Flex
                justifyContent={'center'}
                direction={'column'}
                gap={2}
                width={'100%'}
              >
                <Clipboard.Input asChild>
                  <Input
                    size="lg"
                    width={'full'}
                    disabled
                    textAlign={'center'}
                    bg={'bg'}
                    opacity={'1'}
                  />
                </Clipboard.Input>
                <ClipboardIconButton />
              </Flex>
            </InputGroup>
          </Clipboard.Root>
        </Flex>
        <Flex
          justifyContent={'center'}
          marginY={8}
        >
          <Box
            shadow={'md'}
            p={4}
            bg={'gray.50'}
          >
            <Image
              alt="Qrcode do Pix para ofertas para Comunidade Esperança"
              src={'images/pix.jpg'}
              width={'300px'}
            />
          </Box>
        </Flex>
      </Flex>
    </Widget>
  );
}

const ClipboardIconButton = () => {
  return (
    <Clipboard.Trigger asChild>
      <IconButton
        variant="surface"
        size="sm"
        colorPalette={'primary'}
      >
        Copiar Chave Pix
        <Clipboard.Indicator />
      </IconButton>
    </Clipboard.Trigger>
  );
};
