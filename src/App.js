import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, VStack, Heading } from '@chakra-ui/react';
import GroupForm from './components/GroupForm';
import GroupList from './components/GroupList';
import TodoGroup from './components/TodoGroup';

function App() {
  return (
    <Box className="App" p={4}>
      <VStack spacing={4}>
        {/* <TodoGroup /> */}
        <GroupForm/>
        <GroupList/>
      </VStack>
    </Box>
  );
}

export default App;
