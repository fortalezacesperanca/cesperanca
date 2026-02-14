import { Box, Icon, Text } from '@chakra-ui/react';

export function InfoLine({ text, icon }: any) {
  return (
    <Box
      mb={2}
      justifyContent={'left'}
      alignItems={'center'}
    >
      {icon && (
        <Icon
          marginEnd={'2'}
          color="accent.500"
        >
          {icon}
        </Icon>
      )}
      <Text
        display={'inline'}
        fontSize={'md'}
      >
        {text}
      </Text>
    </Box>
  );
}
