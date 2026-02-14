import { Container, Flex } from '@chakra-ui/react';
import { GroupListWidget } from '../widgets/GroupList/GroupListWidget';

export default function GroupListPage() {
  return (
    <Flex direction={'column'}>
      <Flex>
        <Container>
          <GroupListWidget json="db/grupos.json" />
        </Container>
      </Flex>
    </Flex>
  );
}
