import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ number, isCurrent = false, onPageChange }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontWeight="xs"
        width="4"
        colorScheme="green"
        disabled
        _disabled={{
          backgroundColor: 'green.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontWeight="xs"
      width="4"
      backgroundColor="gray.700"
      _hover={{
        backgroundColor: 'gray.500'
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}