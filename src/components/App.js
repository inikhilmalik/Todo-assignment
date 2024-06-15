import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, VStack, Heading } from '@chakra-ui/react';
import { fetchTodoStatus } from '../actions';
import GroupList from './GroupList';
import GroupForm from './GroupForm';

function App() {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.groups);

  const handleShowStatus = () => {
    groups.forEach(group => {
      for (let i = group.from; i <= group.to; i++) {
        dispatch(fetchTodoStatus(i));
      }
    });
  };

  return (
    <Box className="App" p={4}>
      <Heading mb={4}>Todo List Status</Heading>
      <VStack spacing={4}>
        <GroupForm />
        <GroupList groups={groups} />
        <Button onClick={handleShowStatus} colorScheme="blue">Show Status</Button>
      </VStack>
    </Box>
  );
}

export default App;
