import { Flex, Icon, Text } from '@chakra-ui/react';
import { RiMapPin2Fill } from 'react-icons/ri';
import { Model } from '../../../domain/model';
import { Widget } from '../../components/Widget';
import { useJSON } from '../../hooks/useJSON';

function ContactLine({ text, icon }: any) {
  return (
    <Flex
      gap={2}
      mb={2}
      justifyContent={'left'}
      alignItems={'center'}
    >
      {icon && <Icon>{icon}</Icon>}
      <Text>{text}</Text>
    </Flex>
  );
}

export default function ContactWidgetV3() {
  const [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: {},
  });
  return (
    <Widget
      title="Contato"
      showActionButton={false}
    >
      <Flex
        direction={'column'}
        justifyContent={'flex-start'}
      >
        <ContactLine text={global.title} />
        <ContactLine
          text={global.address}
          icon={<RiMapPin2Fill />}
        />
        {/* <ContactLine
            text={ global.phone }
            icon={ <RiPhoneFill /> }
          />
          <ContactLine
            text={ global.email }
            icon={ <RiMailFill /> }
          /> */}
      </Flex>
    </Widget>
  );
}
