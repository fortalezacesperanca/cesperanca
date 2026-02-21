import { Container, Flex } from '@chakra-ui/react';
import AgendaWidget from '../widgets/AgendaList/AgendaListWidget';

export default function AgendaListPage() {
  return (
    <Flex direction={'column'}>
      <Flex>
        <Container>
          <AgendaWidget showActionButton={false} />
        </Container>
      </Flex>
    </Flex>
  );
}
