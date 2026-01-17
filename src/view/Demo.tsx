import { Box, Button, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ColorMode";

export const Demo = () => {
  return (
    <div>
      <HStack>
        <Button
          color={""}
          bg={"bg.subtle"}
        >
          Click me
        </Button>
        <Button>Click me</Button>
      </HStack>

      <Box
        bg="bg"
        width={300}
        height={300}
      ></Box>

      <ColorModeButton bg="bg" />
    </div>
  );
};
