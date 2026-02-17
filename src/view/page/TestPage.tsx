import { FlexContainer } from '../components/FlexContainer';
import { GroupListWidget } from '../widgets/GroupList/GroupListWidget';

export default function TestPage() {
  return (
    <FlexContainer justifyContent={'center'}>
      <GroupListWidget />
    </FlexContainer>
  );
}
