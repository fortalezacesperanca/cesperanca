import {
  Box,
  Clipboard,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { RiHeart2Fill } from 'react-icons/ri';
import { Model } from '../../../domain/model';
import { WidgetTitle } from '../../components/WidgetTitle';
import { useImageList } from '../../hooks/useImage';
import { useJSON } from '../../hooks/useJSON';

export default function PixWidget() {
  const [images] = useImageList<string[]>({
    path: ['images/pix.jpg', 'images/pix-banco-central.svg'],
    defaultValue: [],
  });

  const [qrcode, pix] = images;

  const [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: {},
  });

  const key = global && global.pix ? global.pix.key : '';
  const bankName = global && global.pix ? global.pix.bankName : '';
  const accountName = global && global.pix ? global.pix.accountName : '';

  return (
    <Flex
      direction="column"
      width={'100%'}
    >
      <Container>
        <Flex py={2}>
          <WidgetTitle
            text={'Ofertas'}
            icon={<RiHeart2Fill />}
          />
        </Flex>
        <Flex
          justifyContent={'center'}
          width={'100%'}
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
                  src={pix}
                />
              </Flex>
              <Text fontSize={'md'}>{bankName}</Text>
              <Text fontSize={'md'}>{accountName}</Text>
              {/* <Text fontSize={'md'}>Chave Pix</Text> */}
            </Clipboard.Label>
            <InputGroup mt={2}>
              <Flex
                justifyContent={'center'}
                direction={'column'}
                gap={2}
              >
                <Clipboard.Input asChild>
                  <Input
                    size="lg"
                    width={'full'}
                    disabled
                    textAlign={'center'}
                    bg={'bg'}
                    // color={'gray.950'}
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
              src={qrcode}
              width={'300px'}
            />
          </Box>
        </Flex>
      </Container>
    </Flex>
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
