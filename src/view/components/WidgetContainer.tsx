import type { ContainerProps } from '@chakra-ui/react';
import { FlexContainer } from './FlexContainer';

export default function WidgetContainer({
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
    <FlexContainer
      id={id}
      maxWidth={maxWidth}
      {...props}
    >
      {children}
    </FlexContainer>
  );
}
