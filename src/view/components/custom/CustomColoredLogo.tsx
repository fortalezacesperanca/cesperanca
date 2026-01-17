import { Box, Image } from "@chakra-ui/react";
import logo from "../../assets/logo_colored.svg";

export function CustomColoredLogo({ title = "" }: { title: string }) {
  return (
    <Box px={4}>
      <Image
        alt={title}
        textShadow={"lg"}
        src={logo}
        width={{
          sm: 300,
        }}
      />
    </Box>
  );
}
