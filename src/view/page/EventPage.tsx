import { Box, Container, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { RiCalendar2Fill, RiMapPin2Fill, RiTimeFill } from 'react-icons/ri';
import { useParams } from 'react-router';
import type { Model } from '../../domain/model';
import { Image } from '../components/Image';
import { useJSON } from '../hooks/useJSON';

function InfoLine({ text, icon }: any) {
  return (
    <Box
      mb={2}
      justifyContent={'left'}
      alignItems={'center'}
    >
      {icon && <Icon marginEnd={'2'}>{icon}</Icon>}
      <Text
        display={'inline'}
        fontSize={'md'}
      >
        {text}
      </Text>
    </Box>
  );
}

export default function EventPage() {
  var [events] = useJSON<Model.EventItem[]>({
    path: 'db/events.json',
    defaultValue: [],
  });

  const params = useParams();

  const [_, name] = params.eventURI!.split(':');
  const event = events.filter((e) => e.name == name)[0];

  return (
    <Flex direction={'column'}>
      {event && (
        <Flex>
          <Container>
            <Flex
              maxW="6xl"
              mx="auto"
              py={2}
              justifyContent={'center'}
            >
              <Image path={event.image} />
            </Flex>
            <Heading
              py={2}
              fontSize={'2xl'}
            >
              {event.name}
            </Heading>
            <Flex direction={'column'}>
              <InfoLine text={event.description} />
              <InfoLine
                text={event.date}
                icon={<RiCalendar2Fill />}
              />
              <InfoLine
                text={event.time}
                icon={<RiTimeFill />}
              />
              <InfoLine
                text={event.address}
                icon={<RiMapPin2Fill />}
              />
              <Box py={4}>
                <Text> {event.longDescription}</Text>
              </Box>
            </Flex>
          </Container>
        </Flex>
      )}
    </Flex>
  );
}
