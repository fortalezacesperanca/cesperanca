import { Box, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

export function CustomLogo({ title = "" }: { title: string }) {
  return (
    <Box px={4}>
      <Image
        alt={title}
        textShadow={"lg"}
        src={logo}
        width={{
          // sm: 300,
          // md: 300,
          // lg: 300,
          sm: "sm",
          md: "sm",
          lg: "sm",
        }}
      />
    </Box>
  );
}
export function CustomTextLogo({ title = "" }: { title: string }) {
  var [firstLine, secondLine] = title.split(" ");
  return (
    <Box px={4}>
      <Heading
        as="h1"
        textTransform={"uppercase"}
        color="gray.50"
        size={"2xl"}
      >
        <Text textShadow={"textmd"}>{firstLine}</Text>
      </Heading>
      <Heading
        as="h1"
        textTransform={"uppercase"}
        color="gray.50"
        size={"4xl"}
      >
        <Text textShadow={"textmd"}>{secondLine}</Text>
      </Heading>
    </Box>
  );
}
