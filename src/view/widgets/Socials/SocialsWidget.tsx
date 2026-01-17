import { Box, Flex, Icon, Link, Text, type BoxProps } from '@chakra-ui/react';
import type React from 'react';
import { RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';
import type { Model } from '../../../domain/model';
import { WidgetTitle } from '../../components/WidgetTitle';
import { useJSON } from '../../hooks/useJSON';

const socialIcons: Record<string, { icon: React.ReactNode; styles: BoxProps }> =
  {
    Instagram: {
      icon: <RiInstagramFill />,
      styles: {
        bgGradient: 'to-bl',
        gradientFrom: '#4653e4',
        gradientVia: '#ef1d7c',
        gradientTo: '#f7b14d',
      },
    },
    YouTube: {
      icon: <RiYoutubeFill />,
      styles: {
        bg: '#FF0033',
      },
    },
  };

function SocialButton({ text, icon, link, styles }: any) {
  return (
    <Flex
      direction={'column'}
      justifyContent={'center'}
      gap={2}
    >
      <Link
        aria-label={`Navegar para ${text}`}
        href={link}
        textDecoration={'none'}
        target="_blank"
      >
        <Flex
          direction={'column'}
          color={'fg'}
          _hover={{
            textDecoration: 'underline',
          }}
        >
          <Box
            {...styles}
            p={4}
            boxSize={'fit-content'}
            rounded={'md'}
            justifyContent={'center'}
            margin={'auto'}
          >
            <Flex justifyContent={'center'}>
              {icon && (
                <Icon
                  boxSize={8}
                  color={'gray.50'}
                >
                  {icon}
                </Icon>
              )}
            </Flex>
          </Box>
          <Text
            fontSize={'lg'}
            textAlign={'center'}
          >
            {`${text}`}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}

export default function SocialsWidget() {
  var [global] = useJSON<Model.Global>({
    path: 'db/global.json',
    defaultValue: [],
  });

  var socials = global && global.socials ? global.socials : [];

  return (
    <Flex
      direction="column"
      width={'100%'}
    >
      <Flex
        py={2}
        justifyContent={'center'}
      >
        <WidgetTitle text={'Siga-nos'} />
      </Flex>
      <Flex
        justifyContent={'center'}
        gap={8}
        flexWrap={'wrap'}
      >
        {socials
          .filter((item) => item.isEnabled)
          .map((item, index) => (
            <SocialButton
              key={index}
              icon={socialIcons[item.name].icon}
              styles={socialIcons[item.name].styles}
              text={item.name}
              link={item.link}
            />
          ))}
      </Flex>
    </Flex>
  );
}
