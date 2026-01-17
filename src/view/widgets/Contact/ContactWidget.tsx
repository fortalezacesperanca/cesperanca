import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react';
import { RiMapPin2Fill } from 'react-icons/ri';
import { Model } from '../../../domain/model';
import { WidgetTitle } from '../../components/WidgetTitle';
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

export default function ContactWidget() {
  const [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: {},
  });
  return (
    <Flex
      width={'full'}
      margin={'auto'}
      wrap={'wrap'}
      p={8}
    >
      <Container>
        <Flex
          direction={'column'}
          justifyContent={'flex-start'}
        >
          <Box mb={2}>
            <WidgetTitle text={'Contato'} />
          </Box>
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
      </Container>
    </Flex>
  );
}
