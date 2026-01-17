import { Container, Flex } from '@chakra-ui/react';
import EventsWidgetV3 from '../widgets/Events/EventsWidgetV3';

export default function EventsPage() {
  return (
    <Flex direction={'column'}>
      <Flex>
        <Container>
          <EventsWidgetV3
            showActionButton={false}
            json="db/events.json"
          />
        </Container>
      </Flex>
    </Flex>
  );
}
