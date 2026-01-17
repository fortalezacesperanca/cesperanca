import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Anchor } from '../components/Anchor';

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
            <Text>
              Este site não processa, armazena nem utiliza cookies próprios para
              coleta de dados, estatísticas, marketing ou rastreamento de
              usuários.
            </Text>
            <Text>
              Os únicos cookies eventualmente utilizados são cookies de
              terceiros do Google Maps, necessários exclusivamente para o
              funcionamento e exibição do mapa incorporado no site.
            </Text>
            <Text>
              Esses cookies são gerenciados e controlados diretamente pelo
              Google, de acordo com suas próprias políticas de privacidade e uso
              de dados.
            </Text>
            <Text>
              O uso do Google Maps está sujeito às Políticas de Privacidade do
              Google, que podem ser consultadas no link abaixo:
            </Text>

            <Anchor
              text="https://policies.google.com/privacy"
              href="https://policies.google.com/privacy"
              target="_blank"
            />

            <Text>
              Ao continuar navegando ou utilizar o Google Maps, você concorda
              com os termos definidos pelo Google.
            </Text>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}
