import { Center, Flex, Icon, Text } from "@chakra-ui/react";
import { RiMapPin2Fill } from "react-icons/ri";
import type { Model } from "../../../domain/model";
import { ColorModeButton } from "../../components/ColorMode";
import { useJSON } from "../../hooks/useJSON";

export const TopBarWidget = ({
  enableAddress = true,
  enableColorMode = true,
}: any) => {
  var [global] = useJSON<Model.Global>({
    path: "db/global.json",
    defaultValue: [],
  });

  return (
    <Flex
      bg="gray.900"
      color="gray.50"
      w={"100%"}
      p={4}
    >
      <Flex
        flex={1}
        justifyContent=""
      ></Flex>
      <Flex px={4}>
        {enableAddress && (
          <Center gap={2}>
            <Icon size={"lg"}>
              <RiMapPin2Fill />
            </Icon>
            <Text>{global.address}</Text>
          </Center>
        )}
      </Flex>
      <Flex flex={1}>
        <Center>{enableColorMode && <ColorModeButton />}</Center>
      </Flex>
    </Flex>
  );
};
