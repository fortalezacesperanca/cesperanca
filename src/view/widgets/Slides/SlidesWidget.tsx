import { Image } from "@chakra-ui/react";
import { Slide, Slides } from "../../components/Slides";
import { useImageList } from "../../hooks/useImage";

export default function SlidesWidget({ paths }: { paths: string[] }) {
  const [slides] = useImageList<string[]>({ path: paths, defaultValue: [] });

  return (
    <Slides slideCount={ paths.length }>
      { slides.map((item, index) => {
        return (
          <Slide
            key={ index }
            index={ index }
          >
            <Image
              src={ item }
              fit="contain"
              height={ "auto" }
              width={ "100%" }
            />
          </Slide>
        );
      }) }
    </Slides>
  );
};
