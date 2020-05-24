// Dependencies
import { useRouter } from 'next/router';

// Styles
import {
  AccordionIcon,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Box,
  Skeleton,
  Stack,
  Text
} from '@chakra-ui/core';

const HistoryLoad = () => (
  <Skeleton borderRadius="1rem">
    <AccordionItem>
      <AccordionHeader>
        <Box flex="1" textAlign="left">
          <Text>Yes</Text>
          <Text>Yes</Text>
        </Box>
        <AccordionIcon />
      </AccordionHeader>
      <AccordionPanel pb={4}></AccordionPanel>
    </AccordionItem>
  </Skeleton>
);

const GroceryListLoad = () => (
  <Skeleton borderRadius="1rem">Placeholder</Skeleton>
);

const Loading = () => {
  const { pathname } = useRouter();

  if (pathname === '/history') {
    return (
      <Stack
        width="60%"
        maxWidth="500px"
        minWidth="300px"
        margin="auto"
        spacing="0.5rem"
      >
        <Box>
          <HistoryLoad />
        </Box>
        <Box>
          <HistoryLoad />
        </Box>
        <Box>
          <HistoryLoad />
        </Box>
        <Box>
          <HistoryLoad />
        </Box>
      </Stack>
    );
  }

  if (pathname === '/') {
    return (
      <Stack
        width="60%"
        maxWidth="500px"
        minWidth="300px"
        margin="auto"
        spacing="0.5rem"
      >
        <Box>
          <GroceryListLoad />
        </Box>
        <Box>
          <GroceryListLoad />
        </Box>
        <Box>
          <GroceryListLoad />
        </Box>
        <Box>
          <GroceryListLoad />
        </Box>
      </Stack>
    );
  }
};

export default Loading;
