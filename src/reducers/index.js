import { combineReducers } from 'redux';
import { ADD_GROUP, DELETE_GROUP, SET_STATUS } from '../actions';

const initialGroups = [{ from: 1, to: 10 }];

const groupsReducer = (state = initialGroups, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return [...state, action.payload];
    case DELETE_GROUP:
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const statusReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, [action.payload.id]: action.payload.status };
    default:
      return state;
  }
};

export const fetchTodoItem = (id) => async (dispatch) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/9`);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      console.log(response)
      const todoItem = await response.json();
      dispatch({ type: 'FETCH_TODO_ITEM_SUCCESS', payload: todoItem });
    } catch (error) {
      console.error('Error fetching todo item:', error);
      dispatch({ type: 'FETCH_TODO_ITEM_FAILURE' });
    }
  };

export default combineReducers({
  groups: groupsReducer,
  status: statusReducer,
});
