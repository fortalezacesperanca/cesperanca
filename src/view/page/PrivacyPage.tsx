import {
  Button,
  CloseButton,
  Container,
  Dialog,
  Flex,
  Heading,
  Portal,
} from '@chakra-ui/react';
import { Anchor } from '../components/Anchor';

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

export default function PrivacyPage() {
  return (
    <Flex direction={'column'}>
      <Flex>
        <Container>
          <Heading>Aviso sobre o uso de cookies </Heading>

          <Flex
            py={12}
            direction={'column'}
            gap={4}
          >
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
        </Container>
      </Flex>
    </Flex>
  );
}
