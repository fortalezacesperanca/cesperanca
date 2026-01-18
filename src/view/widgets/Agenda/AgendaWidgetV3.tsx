import { Box, Card, SimpleGrid, Text, type BoxProps } from '@chakra-ui/react';
import { RiTimeFill } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { Widget } from '../../components/Widget';
import { Routes } from '../../routes/routes';
import { useAgendaViewModel } from './AgendaWidget.ViewModel';

const styles = (eventType: Model.EventType) => {
  const styleTypes: Record<Model.EventType, BoxProps> = {
    common: {
      bgGradient: 'to-tr',
      gradientFrom: 'primary.600',
      gradientTo: 'accent.400',
    },
    variant: {
      bgGradient: 'to-tr',
      gradientFrom: 'aqua.600',
      gradientTo: 'aqua.400',
    },
    special: {
      bgGradient: 'to-tr',
      gradientFrom: 'red.600',
      gradientTo: 'red.400',
    },
    men: {
      bgGradient: 'to-tr',
      gradientFrom: 'blue.600',
      gradientTo: 'cyan.400',
    },
    women: {
      bgGradient: 'to-tr',
      gradientFrom: 'pink.600',
      gradientTo: 'pink.400',
    },
    teen: {
      bgGradient: 'to-tr',
      gradientFrom: 'purple.600',
      gradientTo: 'purple.400',
    },
    kids: {
      bgGradient: 'to-tr',
      gradientFrom: 'orange.600',
      gradientTo: 'yellow.500',
    },
  };
  return styleTypes[eventType];
};

export default function AgendaWidgetV3({
  json,
  showActionButton = true,
}: {
  json: string;
  showActionButton?: boolean;
}) {
  const { agenda } = useAgendaViewModel({ json });

  return (
    <Widget
      actionButtonText={'Ver agenda completa'}
      actionButtonLink={Routes.AGENDA}
      showActionButton={showActionButton}
      icon={<RiTimeFill />}
      title="Cultos"
    >
      <SimpleGrid
        gap={6}
        columns={{
          base: 1,
          sm: 1,
          md: 1,
          lg: 2,
        }}
      >
        {agenda.map((event, index) => {
          return (
            <Box
              flex={1}
              key={index}
            >
              <Card.Root
                flexDirection="row"
                overflow="hidden"
                rounded={'lg'}
                shadow={'md'}
              >
                <Box
                  {...styles(event.eventType)}
                  flexGrow={0}
                  flexBasis={'200px'}
                  flexShrink={0}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Text
                    color={'gray.50'}
                    textShadow={'textsm'}
                    fontSize={'2xl'}
                    fontFamily={'FontHeading'}
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                  >
                    {event.dayOfWeek.substring(0, 3)}
                  </Text>
                  <Text
                    color={'gray.50'}
                    textShadow={'textsm'}
                    fontSize={'2xl'}
                    fontFamily={'FontHeading'}
                    fontWeight={'bold'}
                  >
                    {event.time}
                  </Text>
                </Box>
                <Box>
                  <Card.Body>
                    <Card.Title mb={2}>{event.eventName}</Card.Title>
                    <Box
                      color={'fg'}
                      fontSize={'sm'}
                    >
                      <Text>
                        {event.dayOfWeek} - {event.time}
                      </Text>
                      <Text py={2}>{event.description}</Text>
                    </Box>
                  </Card.Body>
                </Box>
              </Card.Root>
            </Box>
          );
        })}
      </SimpleGrid>
    </Widget>
  );
}
