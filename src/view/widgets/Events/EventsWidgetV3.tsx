import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import {
  RiArrowRightLine,
  RiCalendar2Fill,
  RiMapPin2Fill,
  RiTimeFill,
} from 'react-icons/ri';
import { Link } from 'react-router';
import type { Model } from '../../../domain/model';
import { Image } from '../../components/Image';
import { Widget } from '../../components/Widget';
import { useJSON } from '../../hooks/useJSON';
import { getUniqueEventURI, Routes } from '../../routes/routes';

export default function EventsWidgetV3({
  json,
  showActionButton = true,
}: {
  json: string;
  showActionButton?: boolean;
}) {
  let [events] = useJSON<Model.Events>({ path: json, defaultValue: [] });

  events = events.filter((event) => event.isEnabled);

  return (
    <Widget
      actionButtonText={'Ver todos os eventos'}
      actionButtonLink={Routes.EVENTS}
      showActionButton={showActionButton}
      icon={<RiCalendar2Fill />}
      title="Eventos"
    >
      <SimpleGrid
        gap={6}
        columns={{
          base: 1,
          sm: 1,
          md: 1,
          lg: 1,
          xl: 1,
        }}
      >
        <EventsList events={events} />
      </SimpleGrid>
    </Widget>
  );
}

export function EventsList({ events }: { events: Model.Events }) {
  if (events.length == 0) {
    return <Text>Ainda não há eventos. Acompanhe para não perder!</Text>;
  }
  return (
    <>
      {events.map((event, index) => (
        <Box key={index}>
          <Card.Root
            flexDirection="row"
            overflow="hidden"
            rounded={'lg'}
            shadow={'md'}
          >
            <Flex
              padding={4}
              width="full"
            >
              <Flex
                className="card.content"
                width="full"
                flexDirection={{
                  base: 'column',
                  md: 'row',
                }}
              >
                <Box
                  className="card.image"
                  paddingRight={{
                    base: 0,
                    md: 4,
                  }}
                  paddingBottom={{
                    base: 0,
                    md: 0,
                  }}
                >
                  <Center height={'100%'}>
                    <Image
                      alignSelf={'center'}
                      maxWidth={{
                        base: '100%',
                        md: '320px',
                      }}
                      aspectRatio={2 / 1}
                      borderRadius={'md'}
                      path={event.image}
                      alt={`${event.name} ${event.description}`}
                    />
                  </Center>
                </Box>
                <Flex
                  py={'2'}
                  px={'4'}
                  direction={{
                    base: 'row',
                    md: 'column',
                  }}
                  justifyContent={'center'}
                  textAlign={'center'}
                  fontFamily={'FontHeading'}
                  fontSize={'2xl'}
                  color={{
                    _dark: 'gray.300',
                    _light: 'primary.600',
                  }}
                  gap={2}
                >
                  <Box>{getDate(event.date).day}</Box>
                  <Box>{getDate(event.date).monthName}</Box>
                  <Box>{getDate(event.date).yearShort}</Box>
                </Flex>

                <Card.Body
                  className="card.body"
                  flexDirection={'column'}
                >
                  <Card.Title
                    mb={2}
                    fontSize={'lg'}
                  >
                    {event.name}
                  </Card.Title>
                  <Box color={'fg'}>
                    <CardLine text={event.description} />
                    <CardLine
                      text={event.time}
                      icon={<RiTimeFill />}
                    />
                    <CardLine
                      text={event.address}
                      icon={<RiMapPin2Fill />}
                    />
                    <Flex justifyContent={'flex-end'}>
                      <Link to={getUniqueEventURI(index, event)}>
                        <Button
                          size={'lg'}
                          colorPalette={'primary'}
                          fontWeight={'bold'}
                          _hover={{
                            textDecoration: 'underline',
                          }}
                        >
                          Ver evento
                          <Icon>
                            <RiArrowRightLine />
                          </Icon>
                        </Button>
                      </Link>
                    </Flex>
                  </Box>
                </Card.Body>
              </Flex>
            </Flex>
          </Card.Root>
        </Box>
      ))}
    </>
  );
}

function getDate(dateString: string) {
  const [day, month, yearLong] = dateString.split('/');
  const date = new Date();
  date.setDate(parseInt(day));
  date.setMonth(parseInt(month));
  date.setFullYear(parseInt(yearLong));

  const monthName = date.toLocaleString('default', { month: 'short' });
  const yearShort = date.toLocaleString('default', { year: '2-digit' });
  return { day, month, monthName, yearLong, yearShort };
}

function CardLine({ text, icon }: any) {
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
