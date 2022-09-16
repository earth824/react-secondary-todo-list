import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [] },
  reducers: {
    getAllTodo: (state, action) => {
      state.todos = action.payload;
    },
    createTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    updateTodo: (state, action) => {},
    deleteTodo: (state, action) => {}
  }
});

// reducer fn, name, action creaters

export default todoSlice.reducer;

export const { getAllTodo, createTodo, updateTodo, deleteTodo } =
  todoSlice.actions;

export const addTodo = title => async dispatch => {
  try {
    const res = await axios.post(
      'http://localhost:8007/todos',
      { title },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    dispatch(createTodo(res.data.todo));
  } catch (err) {}
};

export const fetchTodo = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:8007/todos', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    dispatch(getAllTodo(res.data.todos));
  } catch (err) {
    console.log(err);
    alert('fetch error');
  }
};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'todo/getAllTodo': {
//        state.todos = action.payload;
//     }
//     case 'todo/createTodo': {

//     }
//   }
// }

// function fetchTodo(value) {
//   return { type: 'todo/getAllTodo', payload: value }
// }

// dispatch(fetchTodo(8)) equal dispatch({ type: 'todo/fetchTodo', payload: 8 })

// thunk middleware

// function thunk(title) {
//   return async function(dispatch) {
//     const res = axios.post('....', {})
//     dispatch(createTodo(res.data.todo))
//   }
// }
