import { Box, Flex, Grid } from "@chakra-ui/react";
import type React from "react";

type PageTemplate = {
  top: React.ReactNode;
  middle: React.ReactNode;
  bottom?: React.ReactNode;
  fixedBottom: React.ReactNode;
  fixedBottomHeight: string;
};

export const PageTemplateFixedFooter = ({
  top,
  middle,
  bottom,
  fixedBottom,
  fixedBottomHeight,
}: PageTemplate) => {
  var height = "100dvh";
  return (
    <Flex
      minH={height}
      direction={"column"}
      overflow={"hidden"}
    >
      <Grid>
        <Flex
          direction={"column"}
          height={`calc(${height} - ${fixedBottomHeight})`}
          overflow={"auto"}
        >
          <Box as="header">{top}</Box>
          <Box as="main">{middle}</Box>
          <Box as="footer">{bottom && bottom}</Box>
        </Flex>
        <Box zIndex={"sticky"}>{fixedBottom}</Box>
      </Grid>
    </Flex>
  );
};
