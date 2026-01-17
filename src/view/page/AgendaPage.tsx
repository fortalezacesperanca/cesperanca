import { Container, Flex } from '@chakra-ui/react';
import AgendaWidgetV3 from '../widgets/Agenda/AgendaWidgetV3';

export default function AgendaPage() {
  return (
    <Flex direction={'column'}>
      <Flex>
        <Container>
          <AgendaWidgetV3
            json="db/agenda_cultos.json"
            showActionButton={false}
          />
        </Container>
      </Flex>
    </Flex>
  );
}
