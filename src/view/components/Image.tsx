import type { ImageProps } from '@chakra-ui/react';
import { Image as ChakraImage } from '@chakra-ui/react';
import { useImage } from '../hooks/useImage';

export function Image({
  src,
  ...props
}: {
  src: string;
} & ImageProps) {
  const finalSrc = useImage(src);

  return (
    <ChakraImage
      {...props}
      // alignSelf={ "center" }
      // maxWidth={ "320px" }
      // height={ "180px" }
      // aspectRatio={ 16 / 9 }
      src={finalSrc}
      // alt="Green double couch with wooden legs"
    />
  );
}
