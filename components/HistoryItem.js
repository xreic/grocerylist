// Styles
import { Text } from '@chakra-ui/core';

// Context
const HistoryItem = ({ product, quantity }) => (
  <React.Fragment>
    <Text alignSelf="center">{product}</Text>
    <Text alignSelf="center">{quantity}</Text>
  </React.Fragment>
);

export default HistoryItem;
