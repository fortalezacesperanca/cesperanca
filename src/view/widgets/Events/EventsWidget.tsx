import { Flex, Strong, Table } from '@chakra-ui/react';
import { RiCalendar2Fill } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { WidgetTitle } from '../../components/WidgetTitle';
import { useJSON } from '../../hooks/useJSON';

export default function EventsWidget({ json }: { json: string }) {
  var [agenda] = useJSON<Model.Events>({ path: json, defaultValue: [] });

  return (
    <Flex
      direction="column"
      width={'100%'}
    >
      <Flex py={2}>
        <WidgetTitle
          text={'Próximos Eventos'}
          icon={<RiCalendar2Fill />}
        />
      </Flex>
      <Flex width={'100%'}>
        <Table.Root
          size="lg"
          striped
          width={'100%'}
        >
          <Table.Header>
            <Table.Row
              bg={'primary.solid'}
              fontFamily={'FontHeading'}
              fontSize={'xl'}
            >
              <Table.ColumnHeader
                color="gray.50"
                textAlign={'center'}
              >
                Onde?
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="gray.50"
                textAlign={'center'}
              >
                Quando?
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {agenda.map((item) => (
              <Table.Row key={item.name}>
                <Table.Cell>
                  <Strong>{item.name}</Strong> <br /> {item.description}
                </Table.Cell>
                {/* <Table.Cell>{ item.description }</Table.Cell> */}
                <Table.Cell>
                  {' '}
                  Dia {item.date} às {item.time}
                </Table.Cell>
                {/* <Table.Cell>{ item.time }</Table.Cell> */}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </Flex>
  );
}
