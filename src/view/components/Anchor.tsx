import { Text } from '@chakra-ui/react';

export function Anchor({ text, href, target }: any) {
  return (
    <Text
      color={{
        _light: 'accent.700',
        _dark: 'accent.100',
      }}
      _hover={{
        textDecoration: 'underline',
      }}
    >
      <a
        href={href}
        target={target}
      >
        {text}
      </a>
    </Text>
  );
}
