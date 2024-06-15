import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, HStack, Text, Alert, AlertIcon } from '@chakra-ui/react';
import { deleteGroup } from '../actions';
import TodoStatus from './TodoStatus';

function GroupList() {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.groups);

  const handleDeleteGroup = (index) => {
    dispatch(deleteGroup(index));
  };

  return (
    <Box>
      {groups.map((group, index) => (
        <HStack key={index} justify="space-between" w="100%" p={2} borderWidth="1px" borderRadius="lg">
          <Text>Group {index + 1}: {group.from} - {group.to}</Text>
          <Button colorScheme="red" onClick={() => handleDeleteGroup(index)}>Delete</Button>
          <TodoStatus group={group} />
        </HStack>
      ))}
    </Box>
  );
}

export default GroupList;
