import {
  Box,
  Button,
  Card,
  Flex,
  Icon,
  SimpleGrid,
  Text,
  type FlexProps,
} from '@chakra-ui/react';
import type React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router';
import type { Model } from '../../../domain/model';
import { WidgetTitle } from '../../components/WidgetTitle';
import { useAgendaViewModel } from './AgendaWidget.ViewModel';

const eventStyles = (eventType: Model.EventType) => {
  const styles: Record<Model.EventType, FlexProps> = {
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
  return styles[eventType];
};

export default function AgendaWidgetV2({
  json,
  title,
  icon,
  actionButtonText = '',
  actionButtonLink = '',
  showTitle = true,
  showActionButton = true,
}: {
  json: string;
  title: string;
  icon: React.ReactNode;
  actionButtonText?: string;
  actionButtonLink?: string;
  showTitle?: boolean;
  showActionButton?: boolean;
}) {
  const { agenda } = useAgendaViewModel({ json });

  return (
    <Flex
      direction="column"
      gap={4}
    >
      <Flex
        direction={{
          base: 'column',
          sm: 'row',
        }}
        alignItems={'center'}
      >
        <Flex
          flexGrow={1}
          width={'full'}
        >
          {showTitle && (
            <WidgetTitle
              text={title}
              icon={icon}
            />
          )}
        </Flex>
        <Flex
          flexGrow={1}
          width={'full'}
          justifyContent={{
            base: 'center',
            sm: 'flex-end',
          }}
        >
          {showActionButton && (
            <Link to={actionButtonLink}>
              <Button
                size={'lg'}
                colorPalette={'primary'}
                fontWeight={'bold'}
                _hover={{
                  textDecoration: 'underline',
                }}
              >
                {actionButtonText}
                <Icon>
                  <RiArrowRightLine />
                </Icon>
              </Button>
            </Link>
          )}
        </Flex>
      </Flex>

      <SimpleGrid
        gap={6}
        columns={{
          base: 1,
          sm: 1,
          md: 2,
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
                <Flex
                  width={'52'}
                  {...eventStyles(event.eventType)}
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
                </Flex>
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
    </Flex>
  );
}
