import {
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";

export const CallToAction = ({
  title = "",
  buttonText = "",
  buttonLink = "",
  buttonIcon,
}: any) => {
  return (
    <Flex
      flex={1}
      width={"full"}
      p={4}
    >
      <Center width={"full"}>
        <Text
          fontSize={"2xl"}
          p={2}
          textAlign={"center"}
        >
          {title}
        </Text>
        <Link
          href={buttonLink}
          textDecoration={"none"}
          target="_blank"
        >
          <HStack>
            <Button
              size={"xl"}
              fontSize={"xl"}
              bg="primary.solid"
              shadow={"sm"}
              color="gray.50"
            >
              {buttonIcon && <Icon size={"2xl"}>{buttonIcon}</Icon>}
              {buttonText}
            </Button>
          </HStack>
        </Link>
      </Center>
    </Flex>
  );
};
