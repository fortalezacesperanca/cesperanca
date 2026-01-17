import { Carousel, Center, Icon, IconButton } from '@chakra-ui/react';
import { type JSX } from 'react';

import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const Slides = ({
  children,
  slideCount,
}: {
  children: React.ReactNode;
  slideCount: number;
}) => {
  return (
    <Carousel.Root
      slideCount={slideCount}
      maxW="6xl"
      mx="auto"
      allowMouseDrag
      autoplay={{
        delay: 8000,
      }}
      defaultPage={0}
    >
      <Carousel.ItemGroup boxShadow={'lg'}>{children}</Carousel.ItemGroup>

      <Carousel.Control
        justifyContent="center"
        gap="4"
      >
        <Carousel.PrevTrigger asChild>
          <IconButton
            size="md"
            variant="ghost"
            colorPalette={'accent'}
          >
            <Icon
              size={'2xl'}
              boxSize={'8'}
            >
              <LuChevronLeft />
            </Icon>
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.Indicators colorPalette={'accent'} />

        <Carousel.NextTrigger asChild>
          <IconButton
            size="md"
            variant="ghost"
            colorPalette={'accent'}
          >
            <Icon
              size={'2xl'}
              boxSize={'8'}
            >
              <LuChevronRight />
            </Icon>
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
};

export const Slide = ({
  children,
  index,
  height = 'auto',
}: {
  children: JSX.Element;
  index: number;
  height?: string;
}) => {
  return (
    <Carousel.Item
      key={index}
      index={index}
    >
      <Center
        bg={'bg'}
        height={height}
        width={'100%'}
        margin={'auto'}
      >
        {children}
      </Center>
    </Carousel.Item>
  );
};
