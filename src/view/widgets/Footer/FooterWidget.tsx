import {
  Container,
  Flex,
  Icon,
  Image,
  Separator,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { RiMapPin2Fill } from 'react-icons/ri';
import { Link } from 'react-router';
import { Model } from '../../../domain/model';
import symbol from '../../assets/symbol.svg';
import { useJSON } from '../../hooks/useJSON';
import { Routes } from '../../routes/routes';
export const FooterWidget = () => {
  var [menu] = useJSON<Model.Menu>({
    path: 'db/navigation_desktop_footer.json',
    defaultValue: [],
  });
  var [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: [],
  });

  return (
    <Flex
      width={'full'}
      margin={'auto'}
      wrap={'wrap'}
      // bg="primary.700"
      bgGradient="to-b"
      gradientFrom="accent.600"
      gradientTo="primary.600"
      color={'gray.100'}
      fontSize={'sm'}
      // fontWeight={'medium'}
      textShadow={'textxs'}
    >
      <Flex
        p={8}
        width={'full'}
      >
        <Container
          width={'full'}
          margin={'auto'}
        >
          <Flex
            maxWidth={'6xl'}
            margin={'auto'}
            direction={'row'}
            gap={8}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Flex
              flex={1}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Link to={Routes.ROOT}>
                <Image
                  alt={'Símbolo da Comunidade Esperança '}
                  src={symbol}
                  boxSize={{
                    base: '16',
                  }}
                />
              </Link>
            </Flex>
            <Separator
              orientation="vertical"
              height="100px"
              borderColor={'gray.100'}
            />
            <SimpleGrid
              flex={1}
              columns={{
                base: 1,
                sm: 2,
                md: 2,
                lg: 3,
              }}
              textAlign={'center'}
              gapY={6}
              gapX={6}
            >
              {menu.map((item) => {
                return (
                  <Link
                    key={item.text}
                    to={item.link}
                  >
                    <Text
                      _hover={{
                        textDecoration: 'underline',
                      }}
                    >
                      {item.text}
                    </Text>
                  </Link>
                );
              })}
            </SimpleGrid>
            <Separator
              orientation="vertical"
              height="100px"
              borderColor={'gray.100'}
            />
            <Flex
              flexDirection={'column'}
              flex={1}
            >
              <ContactLine text={global.title} />
              <ContactLine
                text={global.address}
                icon={<RiMapPin2Fill />}
              />
              {/* <ContactLine
                text={global.phone}
                icon={<RiPhoneFill />}
              /> */}
              {/* <ContactLine
                text={global.email}
                icon={<RiMailFill />} */
              /* /> */}
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
};

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
