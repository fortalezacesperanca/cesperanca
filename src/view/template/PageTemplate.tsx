import { Box, Container, Flex } from "@chakra-ui/react";
import type React from "react";

type PageTemplate = {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
};

export const PageTemplate = ({ header, main, footer }: PageTemplate) => {
  return (
    <Flex direction={"column"}>
      <Box as="header">{header}</Box>
      <Container
        maxWidth={1200}
        p={0}
      >
        <Flex as="main">{main}</Flex>
      </Container>
      <Box
        as="footer"
        width={"100%"}
      >
        {footer}
      </Box>
    </Flex>
  );
};
