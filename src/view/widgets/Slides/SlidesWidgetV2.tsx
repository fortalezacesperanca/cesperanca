import { Box, Image } from '@chakra-ui/react';
import { Env } from '../../../config/env';
import { Slide, Slides } from '../../components/Slides';
import { useJSON } from '../../hooks/useJSON';

export default function SlidesWidgetV2({ path }: { path: string }) {
  const [paths] = useJSON<string[]>({ path, defaultValue: [] });

  const basename = Env.getEnv().HOST;
  const images = paths.map((path) => {
    return `${basename}${path}`;
  });

  if (images.length == 0) {
    return <></>;
  }

  return (
    <Box
      position={'relative'}
      bg="transparent"
      top={{
        base: '-24px',
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
