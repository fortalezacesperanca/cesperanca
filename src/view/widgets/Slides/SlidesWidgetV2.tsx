import { Box, Image } from '@chakra-ui/react';
import { Slide, Slides } from '../../components/Slides';
import { useImageJSON } from '../../hooks/useImage';

export default function SlidesWidgetV2() {
  const [images] = useImageJSON({ path: 'db/slides.json' });
  if (images.length == 0) {
    return <></>;
  }

  return (
    <Box
      position={'relative'}
      bg="transparent"
      top={{
        // base: '-24px',
        md: 0,
      }}
    >
      <Slides slideCount={images.length}>
        {images.map((item, index) => {
          return (
            <Slide
              key={index}
              index={index}
            >
              <Image
                src={item}
                fit="contain"
                height={'auto'}
                width={'100%'}
                aspectRatio={2 / 1}
              />
            </Slide>
          );
        })}
      </Slides>
    </Box>
  );
}
