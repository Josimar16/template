import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      dashgo
      <Text as="span" marginLeft="1" color="green.500">
        .
      </Text>
    </Text>
  );
}