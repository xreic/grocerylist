import { AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/core';
import { StyleAccHeader } from '../shared/styles';

const Safety = () => (
  <AccordionItem
    background="white"
    border="1.5px solid black"
    borderRadius="1rem"
    margin="2rem auto"
    width="50%"
  >
    <AccordionPanel pb={4} isOpen>
      <StyleAccHeader>
        <Box flex="1">
          <Text fontSize="2xl" textAlign="center" color="red.600">
            Keep your information safe.
          </Text>
        </Box>
      </StyleAccHeader>
      <Text fontSize="xl">
        Do NOT enter any sensitive information or your real email into this app.
      </Text>
    </AccordionPanel>
  </AccordionItem>
);

export default Safety;
