import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';

function TodoStatus({ group }) {
  const status = useSelector(state => state.status);

  return (
    <Box>
      {Array.from({ length: group.to - group.from + 1 }, (_, i) => i + group.from).map(id => (
        <Text key={id}>
          Item {id}: {status[id] !== undefined ? (status[id] ? 'Done' : 'Not Done') : 'Loading...'}
        </Text>
      ))}
    </Box>
  );
}

export default TodoStatus;
