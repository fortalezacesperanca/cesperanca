import { Container, Flex } from '@chakra-ui/react';
import EventListWidget from '../widgets/Events/EventListWidget';

export default function EventListPage() {
  return (
    <Flex direction={'column'}>
      <Flex>
        <Container>
          <EventListWidget showActionButton={false} />
        </Container>
      </Flex>
    </Flex>
  );
}
