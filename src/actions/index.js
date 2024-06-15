export const ADD_GROUP = 'ADD_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const SET_STATUS = 'SET_STATUS';

export const addGroup = (group) => ({
  type: ADD_GROUP,
  payload: group,
});

export const deleteGroup = (index) => ({
  type: DELETE_GROUP,
  payload: index,
});

export const setStatus = (id, status) => ({
  type: SET_STATUS,
  payload: { id, status },
});
