import {
  Box,
  Button,
  Card,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  type BoxProps,
} from '@chakra-ui/react';
import { RiArrowRightLine, RiTimeFill } from 'react-icons/ri';
import { Link } from 'react-router';
import type { EventType } from '../../../domain/model';
import { InfoLine } from '../../components/InfoLine';
import { Widget } from '../../components/Widget';
import { getUniqueAgendaURI, Routes } from '../../routes/routes';
import { useAgendaListViewModel } from './AgendaWidget.ViewModel';

export default function AgendaListWidget({
  json,
  showActionButton = true,
}: {
  json: string;
  showActionButton?: boolean;
}) {
  const { uiAgenda } = useAgendaListViewModel({ json });

  return (
    <Widget
      actionButtonText={'Ver agenda completa'}
      actionButtonLink={Routes.AGENDA}
      showActionButton={showActionButton}
      icon={<RiTimeFill />}
      title="Agenda Semanal"
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
        {uiAgenda.map((item, index) => {
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
                  {...styles(item.eventType)}
                  flexGrow={0}
                  flexBasis={{
                    base: '150px',
                    md: '260px',
                  }}
                  flexShrink={0}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  position={'relative'}
                  minHeight={'260px'}
                >
                  <Box
                    zIndex={'docked'}
                    position={'absolute'}
                    height={'100%'}
                    // mixBlendMode={'saturation'}
                    // bg="black"
                    // filter="opacity(30%)"
                    // opacity={'0.5'}
                  >
                    <Image
                      height={'100%'}
                      margin={'auto'}
                      src={item.image}
                      filter="opacity(20%) grayscale(100%)"
                    />
                  </Box>
                  <Box
                    zIndex={'docked'}
                    color={'gray.50'}
                    fontSize={'2xl'}
                    fontFamily={'FontHeading'}
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    textShadow={
                      'var(--chakra-shadows-textsm), var(--chakra-shadows-textmd)'
                    }
                  >
                    <Text>{item.dayOfWeek}</Text>
                    <Text>{item.time}</Text>
                  </Box>
                </Box>
                <Box width={'100%'}>
                  <Card.Body height={'100%'}>
                    <Box
                      className="card.body.content"
                      flexGrow={1}
                    >
                      <Card.Title
                        mb={2}
                        fontSize={'xl'}
                      >
                        {item.name}
                      </Card.Title>
                      <Box color={'fg'}>
                        <InfoLine
                          text={`${item.dayOfWeek} - ${item.time}`}
                          icon={<RiTimeFill />}
                        />
                        <Text
                          py={2}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></Text>
                      </Box>
                    </Box>
                    {
                      <Flex justifyContent={'flex-end'}>
                        <Link to={getUniqueAgendaURI(item)}>
                          <Button
                            size={'lg'}
                            colorPalette={'primary'}
                            fontWeight={'bold'}
                            _hover={{
                              textDecoration: 'underline',
                            }}
                          >
                            Ver mais
                            <Icon>
                              <RiArrowRightLine />
                            </Icon>
                          </Button>
                        </Link>
                      </Flex>
                    }
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

const styles = (eventType: EventType) => {
  const styleTypes: Record<EventType, BoxProps> = {
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
