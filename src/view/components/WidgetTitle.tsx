import { Flex, Heading, Icon } from "@chakra-ui/react";

export function WidgetTitle({
  text,
  icon,
}: {
  text: string;
  icon?: React.ReactNode;
}) {
  return (
    <Flex gap={ 2 }>
      { icon && <Icon size={ "2xl" }>{ icon }</Icon> }
      <Heading
        fontSize={ "2xl" }
        alignSelf={ "center" }
      >
        { text }
      </Heading>
    </Flex>
  );
}
