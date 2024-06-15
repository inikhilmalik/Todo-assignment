// src/components/GroupForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Input, HStack, Text, Alert, AlertIcon } from '@chakra-ui/react';
import { addGroup } from '../actions';
import { validateGroups } from '../validateGroups';

function GroupForm() {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.groups);
  const [newGroup, setNewGroup] = useState({ from: '', to: '' });
  const [error, setError] = useState('');

  const handleAddGroup = () => {
    const from = Number(newGroup.from);
    const to = Number(newGroup.to);
    const updatedGroups = [...groups, { from, to }];

    if (validateGroups(updatedGroups)) {
      dispatch(addGroup({ from, to }));
      setNewGroup({ from: '', to: '' });
      setError('');
    } else {
      setError('Invalid group: Please ensure no overlaps, gaps, and all numbers 1-10 are covered.');
    }
  };

  return (
    <Box>
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      <HStack mb={4}>
        <Input
          type="number"
          value={newGroup.from}
          onChange={e => setNewGroup({ ...newGroup, from: e.target.value })}
          placeholder="From"
          width="100px"
        />
        <Input
          type="number"
          value={newGroup.to}
          onChange={e => setNewGroup({ ...newGroup, to: e.target.value })}
          placeholder="To"
          width="100px"
        />
        <Button onClick={handleAddGroup} colorScheme="green">Add Group</Button>
      </HStack>
    </Box>
  );
}

export default GroupForm;
