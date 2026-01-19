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
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekday from 'dayjs/plugin/weekday';
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

dayjs.extend(weekday);
dayjs.extend(updateLocale);
dayjs.extend(customParseFormat);
dayjs.locale('pt-br');

// dayjs.updateLocale('pt', {
//   months: [
//     'Janeiro',
//     'Fevereiro',
//     'Março',
//     'Abril',
//     'Maio',
//     'Junho',
//     'Julho',
//     'Agosto',
//     'Setembro',
//     'Outubro',
//     'Novembro',
//     'Dezembro',
//   ],
//   weekdays: [
//     'Domingo',
//     'Segunda',
//     'Terça',
//     'Quarta',
//     'Quinta',
//     'Sexta',
//     'Sábado',
//   ],
// });

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
            <Flex width="full">
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
                        md: '400px',
                      }}
                      // aspectRatio={2 / 1}
                      path={event.image}
                      alt={`${event.name} ${event.description}`}
                    />
                  </Center>
                </Box>
                <Flex
                  px={'4'}
                  direction={{
                    base: 'row',
                    md: 'column',
                  }}
                  justifyContent={'center'}
                  textAlign={'center'}
                  fontFamily={'FontHeading'}
                  fontWeight={'bold'}
                  fontSize={'3xl'}
                  color={{
                    _dark: 'gray.300',
                    _light: 'gray.700',
                  }}
                  gap={2}
                  pt={{ base: '4', md: 0 }}
                >
                  <Box
                    textTransform={'uppercase'}
                    color={{
                      _dark: 'gray.300',
                      _light: 'primary.600',
                    }}
                  >
                    {getDate(event.date).dayOfWeek}
                  </Box>
                  <Box fontWeight={'medium'}>
                    {getDate(event.date).dayNumber}
                  </Box>
                  <Box fontWeight={'medium'}>{getDate(event.date).month}</Box>
                </Flex>

                <Card.Body
                  pt={
                    {
                      // base: 0,
                      // md: 6,
                    }
                  }
                  className="card.body"
                  flexDirection={'column'}
                >
                  <Card.Title
                    mb={4}
                    fontSize={'xl'}
                  >
                    {event.name}
                  </Card.Title>
                  <Box
                    color={'fg'}
                    // p={6}
                  >
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
  const [dayNumber, monthNumber, yearNumber] = dateString.split('/');
  const date = dayjs(`${yearNumber}-${monthNumber}-${dayNumber}`, 'YYYY-MM-DD');
  const dayOfWeek = date.format('dddd').toUpperCase().substring(0, 3);
  const month = date.format('MMM');
  return { dayNumber, dayOfWeek, month };
}

function CardLine({ text, icon }: any) {
  return (
    <Box
      mb={2}
      justifyContent={'left'}
      alignItems={'center'}
    >
      {icon && (
        <Icon
          marginEnd={'2'}
          color="accent.500"
        >
          {icon}
        </Icon>
      )}
      <Text
        display={'inline'}
        fontSize={'md'}
      >
        {text}
      </Text>
    </Box>
  );
}
