import { Box, Container, type ContainerProps } from '@chakra-ui/react';
import type React from 'react';

export function FlexContainer({
  id = '',
  maxWidth = '8xl',
  children,
  ...props
}: {
  id?: string;
  maxWidth?: '8xl' | 'full';
  children: React.ReactNode;
} & ContainerProps) {
  return (
    <Container
      {...props}
      m={0}
      py={maxWidth == 'full' ? 0 : 4}
      px={maxWidth == 'full' ? 0 : 4}
      margin={'auto'}
      maxWidth={maxWidth}
    >
      <Box id={id}>{children}</Box>
    </Container>
  );
}
