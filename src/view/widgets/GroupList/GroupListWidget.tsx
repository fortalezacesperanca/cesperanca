import { Box, Card, Image, SimpleGrid, Text } from '@chakra-ui/react';
import {
  RiCalendar2Fill,
  RiGroup3Fill,
  RiMapPin2Fill,
  RiTimeFill,
} from 'react-icons/ri';
import type { UiModel } from '../../../domain/uimodel';
import If from '../../components/If';
import { InfoLine } from '../../components/InfoLine';
import { Widget } from '../../components/Widget';
import { useGroupListViewModel } from './GroupListWidget.ViewModel';

export const GroupListWidget = (props: { json: string }) => {
  const { groups, description } = useGroupListViewModel({ json: props.json });

  return (
    <Widget
      showActionButton={false}
      icon={<RiGroup3Fill />}
      title="Grupos de Relacionamento"
    >
      <Text>{description}</Text>
      <SimpleGrid
        gap={6}
        columns={{
          base: 1,
          sm: 2,
          md: 3,
        }}
      >
        <If condition={groups.length > 0}>
          {groups.map((item) => {
            return <Group group={item}></Group>;
          })}
        </If>
      </SimpleGrid>
    </Widget>
  );
};

export function Group({ group }: { group: UiModel.Group }) {
  return (
    <>
      <Box key={group.name}>
        <Card.Root
          flexDirection="column"
          overflow="hidden"
          rounded={'lg'}
          shadow={'md'}
          position={'relative'}
          minH={'500px'}
        >
          <Box
            position={'relative'}
            w={'100%'}
          >
            <Box
              position={'relative'}
              overflow={'hidden'}
            >
              <Image
                margin={'auto'}
                src={group.image}
                aspectRatio={16 / 9}
              />
            </Box>
          </Box>
          <Box>
            <Card.Header>
              <Box textAlign={'center'}>
                <Card.Title>{group.name}</Card.Title>
                <Card.Description
                  textTransform={'capitalize'}
                  color={'fg.muted'}
                >
                  {group.target}
                </Card.Description>
              </Box>
            </Card.Header>
            <Card.Body>
              <InfoLine
                text={group.dayOfWeek}
                icon={<RiCalendar2Fill />}
              />
              <InfoLine
                text={group.time}
                icon={<RiTimeFill />}
              />
              <InfoLine
                text={group.address}
                icon={<RiMapPin2Fill />}
              />
              <Text>{group.description}</Text>
            </Card.Body>
          </Box>
        </Card.Root>
      </Box>
    </>
  );
}
