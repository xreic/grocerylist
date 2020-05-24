// Dependencies
import { useState } from 'react';
import { formatDistance } from 'date-fns';

// Styles
import {
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  SimpleGrid,
  Text
} from '@chakra-ui/core';
import { StyleAccHeader } from '../shared/styles';
import HistoryItem from './HistoryItem';

const HistoryList = ({ id, history, createdAt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <AccordionItem
        background="white"
        border="1.5px solid black"
        borderRadius="1rem"
        marginBottom="1rem"
      >
        <StyleAccHeader onClick={() => setIsOpen(!isOpen)}>
          <Box flex="1" textAlign="left">
            <Text fontSize="2xl">Order No. {id}</Text>
            <Text fontSize="lg">
              {formatDistance(Date.parse(createdAt), new Date(), {
                addSuffix: true
              })}
            </Text>
          </Box>
          <AccordionIcon />
        </StyleAccHeader>
        <AccordionPanel pb={4} isOpen={isOpen}>
          {isOpen && (
            <SimpleGrid columns="2">
              <Heading as="h4" size="md">
                Item
              </Heading>
              <Heading as="h4" size="md">
                Quantity
              </Heading>
              {history.map((item, index) => (
                <HistoryItem key={index} {...item} />
              ))}
            </SimpleGrid>
          )}
        </AccordionPanel>
      </AccordionItem>
    </React.Fragment>
  );
};

export default HistoryList;
