import React from 'react';
import { Flex, Spacer, Center, Text, Divider } from "@chakra-ui/react"

export const Header = ({
  title,
}: {
  title: string;
}) => {
  return (
    <Flex h="60px" p="24px" bg="gray.400" color="white">
      <Center>
        <Text fontWeight="bold" fontSize="20px" pr="20px">小方块</Text>
        <Divider orientation='vertical' h="20px" pr="20px" />
        {title}
      </Center>
      <Spacer />
    </Flex>
  )
}
