import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { RiTimeFill } from 'react-icons/ri';
import { useParams } from 'react-router';
import { Image } from '../components/Image';
import { InfoLine } from '../components/InfoLine';
import { useAgendaListViewModel } from '../widgets/Agenda/AgendaWidget.ViewModel';

export default function AgendaPage({ json }: any) {
  const params = useParams();

  const [name] = params.agendaURI!.split(':');
  const { uiAgenda } = useAgendaListViewModel({ json });
  const item = uiAgenda.find((e) => e.eventName == name);

  return (
    <Flex direction={'column'}>
      {item && (
        <Flex>
          <Container>
            <Flex
              maxW="6xl"
              mx="auto"
              py={2}
              justifyContent={'center'}
            >
              <Image src={item.image} />
            </Flex>
            <Heading
              py={2}
              fontSize={'2xl'}
            >
              {item.eventName}
            </Heading>
            <Flex direction={'column'}>
              <Text
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></Text>
              {/* <InfoLine
                text={item.date}
                icon={<RiCalendar2Fill />}
              /> */}
              <InfoLine
                text={`${item.dayOfWeek} - ${item.time}`}
                icon={<RiTimeFill />}
              />
              {/* <InfoLine
                text={item.address}
                icon={<RiMapPin2Fill />}
              /> */}
              <Box py={4}>
                <Text> {item.longDescription}</Text>
              </Box>
            </Flex>
          </Container>
        </Flex>
      )}
    </Flex>
  );
}
