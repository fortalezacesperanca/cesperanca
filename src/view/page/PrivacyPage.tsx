import {
  Button,
  CloseButton,
  Container,
  Dialog,
  Flex,
  Heading,
  Portal,
  Switch,
  Text,
} from '@chakra-ui/react';
import { RiCheckFill, RiCloseFill } from 'react-icons/ri';
import { Anchor } from '../components/Anchor';
import { useConfigContext } from '../contexts/ConfigContext';

export default function PrivacyPage() {
  return (
    <Flex direction={'column'}>
      <Flex>
        <Container>
          <Flex
            gap={12}
            direction={'column'}
          >
            <Flex
              direction={'column'}
              gap={4}
            >
              <Heading>Aviso sobre o uso de cookies </Heading>
              <p>
                Este site não utiliza cookies próprios para coleta de dados,
                estatísticas, marketing ou rastreamento de usuários.
              </p>
              <p>
                O mapa disponibilizado no site é fornecido pelo Google Maps e
                somente é carregado mediante autorização prévia do usuário.
              </p>
              <p>
                Ao optar por exibir o mapa, poderão ser instalados cookies de
                terceiros do Google, necessários para o funcionamento e exibição
                do serviço.
              </p>
              <p>
                Esses cookies são gerenciados diretamente pelo Google, conforme
                suas próprias políticas de privacidade e tratamento de dados.
              </p>
              <p>A Política de Privacidade do Google pode ser consultada em:</p>

              <Anchor
                text="https://policies.google.com/privacy"
                href="https://policies.google.com/privacy"
                target="_blank"
              />

              <p>
                O usuário pode revogar seu consentimento a qualquer momento,
                excluindo os cookies do navegador ou deixando de utilizar a
                funcionalidade de mapa.
              </p>
            </Flex>

            <Flex direction={'column'}>
              <Heading>Permissões</Heading>
              <Flex py={6}>
                <PrivacyForm />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}

function PrivacyForm() {
  const { isMapPrivacyAccepted, toggleMapPrivacy } = useConfigContext();
  return (
    <Flex
      flexDirection={'column'}
      width={'100%'}
      gap={4}
    >
      <PrivacySwitch
        text="Google Maps"
        description="Permite uso de dados para funcionamento do Google Maps"
        checked={isMapPrivacyAccepted}
        onCheckedChange={() => toggleMapPrivacy()}
      />
    </Flex>
  );
}

function PrivacySwitch({ text, description, checked, onCheckedChange }: any) {
  return (
    <Switch.Root
      width={'100%'}
      checked={checked}
      onCheckedChange={(e) => onCheckedChange(e.checked)}
      cursor={'pointer'}
    >
      <Flex
        alignItems={'center'}
        p={4}
        width={'100%'}
        bg={'bg.emphasized'}
        borderRadius={'md'}
      >
        <Flex
          className="switch.label"
          flexGrow={'1'}
        >
          <Switch.Label>
            <Flex
              direction={'column'}
              gap={2}
            >
              <Text fontSize={'md'}>{text}</Text>
              <Text color={'fg.muted'}> {description}</Text>
            </Flex>
          </Switch.Label>
        </Flex>
        <Flex className="switch.input">
          <Switch.HiddenInput />
          <Switch.Control
            bg={'red.600'}
            colorPalette={'primary'}
            _checked={{
              bg: 'primary.focusRing',
            }}
          >
            <Switch.Thumb bg={'fg.solid'}>
              <Switch.ThumbIndicator fallback={<RiCloseFill color="black" />}>
                <RiCheckFill color="black" />
              </Switch.ThumbIndicator>
            </Switch.Thumb>
          </Switch.Control>
        </Flex>
      </Flex>
    </Switch.Root>
  );
}

export function PrivacyModal({
  open,
  onDecline,
  onCancel,
  onAccept,
}: {
  open: boolean;
  onDecline: () => void;
  onCancel: () => void;
  onAccept: () => void;
}) {
  return (
    <Dialog.Root
      closeOnInteractOutside={false}
      modal={false}
      placement={'bottom'}
      // defaultOpen={true}
      open={open}
    >
      <Dialog.Trigger asChild>
        {/* <Button
          variant="outline"
          size="sm"
        >
          Open Dialog
        </Button> */}
      </Dialog.Trigger>
      <Portal>
        <Dialog.Positioner pointerEvents="none">
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Aviso de Privacidade</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Utilizamos conteúdo do Google Maps que pode instalar cookies.
              </p>
              <p>O mapa será carregado apenas mediante sua autorização.</p>
              <p>Você pode aceitar ou recusar o uso desses cookies.</p>
            </Dialog.Body>
            <Dialog.Footer>
              {/* <Dialog.ActionTrigger asChild> */}
              <Button
                onClick={() => onDecline()}
                colorPalette={'primary'}
                variant="outline"
              >
                Recusar
              </Button>
              {/* </Dialog.ActionTrigger> */}
              {/* </Dialog.ActionTrigger> */}
              <Button
                onClick={() => onAccept()}
                colorPalette={'primary'}
              >
                Aceitar
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="sm"
                onClick={() => onCancel()}
              />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
