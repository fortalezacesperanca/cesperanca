import { Box, Card, Center, Flex, Heading, Table } from '@chakra-ui/react';
import { RiCalendar2Fill } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { WidgetTitle } from '../../components/WidgetTitle';
import { useAgendaViewModel } from './AgendaWidget.ViewModel';

export default function AgendaWidget({ path }: { path: string }) {
  const { groupedAgenda } = useAgendaViewModel({ json: path });

  return (
    <Flex direction="column">
      <Flex py={2}>
        <WidgetTitle
          text={'Programação'}
          icon={<RiCalendar2Fill />}
        />
      </Flex>
      {
        <Flex
          gap={12}
          justifyContent={'space-evenly'}
          direction={{ base: 'column', md: 'row' }}
        >
          {groupedAgenda.map(({ dayOfWeek, events }, index) => {
            return (
              <Box
                flex={1}
                key={index}
              >
                <AgendaCard
                  dayOfWeek={dayOfWeek}
                  events={events}
                />
              </Box>
            );
          })}
        </Flex>
      }
    </Flex>
  );
}

function AgendaCard({
  dayOfWeek,
  events,
}: {
  dayOfWeek: string;
  events: Model.AgendaItem[];
}) {
  return (
    <Card.Root>
      <Card.Header
        bg={'primary.solid'}
        color={'gray.50'}
        p={2}
      >
        <Center>
          <Heading textTransform={'capitalize'}>{dayOfWeek}</Heading>
        </Center>
      </Card.Header>
      <Card.Body p={0}>
        <Table.Root
          size="lg"
          striped
        >
          <Table.Body>
            {events.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>{item.eventName}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell textAlign="end">{item.time}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card.Body>
    </Card.Root>
  );
}
