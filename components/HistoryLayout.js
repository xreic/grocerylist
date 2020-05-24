// Dependencies
import { useQuery } from '@apollo/react-hooks';

// Styles
import { Heading, Stack, useToast } from '@chakra-ui/core';

// Apollo
import { USER_HISTORY_QUERY } from '../lib/apollo/queries';

// React
import Loading from './Loading';
import HistoryList from './HistoryList';

const HistoryLayout = () => {
  // Hooks
  const toast = useToast();

  // Apollo
  const { data, loading, error } = useQuery(USER_HISTORY_QUERY);

  if (error) {
    toast({
      description: error,
      status: 'error',
      duration: 9001,
      isClosable: true
    });
  }

  if (loading) {
    return <Loading />;
  }

  if (data?.currentUserHistory.nodes.length) {
    const list = data.currentUserHistory.nodes;

    return (
      <Stack
        width="60%"
        maxWidth="500px"
        minWidth="300px"
        margin="auto"
        spacing="0.5rem"
      >
        {list.map((item) => (
          <HistoryList key={item.createdAt} {...item} />
        ))}
      </Stack>
    );
  } else {
    return (
      <Heading as="h4" size="lg">
        Remember to add to your list. 📝
      </Heading>
    );
  }
};

export default HistoryLayout;
