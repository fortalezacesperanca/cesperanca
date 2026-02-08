import { Container, Flex } from '@chakra-ui/react';
import AgendaWidget from '../widgets/Agenda/AgendaListWidget';

export default function AgendaListPage() {
  return (
    <Flex direction={'column'}>
      <Flex>
        <Container>
          <AgendaWidget
            json="db/agenda_cultos.json"
            showActionButton={false}
          />
        </Container>
      </Flex>
    </Flex>
  );
}
