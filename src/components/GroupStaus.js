// src/components/GroupStatus.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text, Button } from '@chakra-ui/react';
import { fetchTodoItem } from '../actions';

const GroupStatus = ({ group }) => {
  const dispatch = useDispatch();
  const todoItems = useSelector(state => state.todoItems);

  const handleFetchStatus = (id) => {
    dispatch(fetchTodoItem(id));
  };

  const renderTodoItems = () => {
    return todoItems?.map(item => (
      <div key={item.id}>
        <p>{item.title}</p>
        <p>Status: {item.completed ? 'Completed' : 'Incomplete'}</p>
      </div>
    ));
  };

  return (
    <Box>
      <Text mb={2}>Group {group.from} - {group.to}</Text>
      {renderTodoItems()}
      <Button mt={2} onClick={() => handleFetchStatus(group.from)}>Fetch Status</Button>
    </Box>
  );
};

export default GroupStatus;
