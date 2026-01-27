import { Box, List as ChakraList, Flex } from '@chakra-ui/react';

export function List<T extends any>({
  list,
  renderItem,
}: {
  list: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;
}) {
  const resultList = list;

  return (
    <Box>
      <Flex></Flex>
      <ChakraList.Root gap={4}>
        {resultList.map((item, index) => (
          <ChakraList.Item key={index}>
            {renderItem(item, index)}
          </ChakraList.Item>
        ))}
      </ChakraList.Root>
    </Box>
  );
}
