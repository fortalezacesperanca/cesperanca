import { Box, Center, Flex, Heading, List, Text } from '@chakra-ui/react';
import { RiHeart2Line } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { useJSON } from '../../hooks/useJSON';

export default function IntroWidget({ path }: { path: string }) {
  var [intro] = useJSON<Model.Intro>({
    path,
    defaultValue: [],
  });

  const contentList = intro && intro.contentList ? intro.contentList : [];

  return (
    <Flex
      maxW={'6xl'}
      margin={'auto'}
      justifyContent={'center'}
    >
      <Flex
        justifyContent={'flex-end'}
        width={'100%'}
        flexDirection={{
          smDown: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
        }}
      >
        {/* <Box
          hidden
          flex={1}
          width={'50%'}
          alignSelf={'center'}
        >
          <Image
            alt="Logotipo da Comunidade Esperança"
            src={logo_colored}
            height={'auto'}
            display={'block'}
            fit={'contain'}
            margin={'auto'}
          />
        </Box> */}
        <Flex
          // width={'6xl'}
          // margin={'auto'}
          flex={1}
        >
          <Center
            gap="4"
            flexDirection={'column'}
            margin={'auto'}
          >
            <Heading
              fontSize={'2xl'}
              textAlign={'center'}
              mt={4}
            >
              {intro.title}
            </Heading>
            <Box textAlign={'left'}>
              <List.Root
                gap="2"
                variant="plain"
                align="center"
              >
                {contentList.map((item, index) => (
                  <List.Item
                    marginBottom={2}
                    key={index}
                  >
                    <List.Indicator
                      boxSize={6}
                      asChild
                      color="accent.400"
                    >
                      <RiHeart2Line />
                    </List.Indicator>
                    {item}
                  </List.Item>
                ))}
              </List.Root>
            </Box>
            <Text
              textAlign={'center'}
              mt={4}
              px={12}
            ></Text>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
}
