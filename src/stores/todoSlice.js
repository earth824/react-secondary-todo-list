import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [] },
  reducers: {
    getAllTodo: (state, action) => {
      state.todos = action.payload;
    },
    createTodo: (state, action) => {},
    updateTodo: (state, action) => {},
    deleteTodo: (state, action) => {}
  }
});

// reducer fn, name, action creaters

export default todoSlice.reducer;

export const { getAllTodo, createTodo, updateTodo, deleteTodo } =
  todoSlice.actions;

// function reducer(state, action) {
//   switch (action.type) {
//     case 'todo/getAllTodo': {

//     }
//     case 'todo/createTodo': {

//     }
//   }
// }

// function fetchTodo(value) {
//   return { type: 'todo/getAllTodo', payload: value }
// }

// dispatch(fetchTodo(8)) equal dispatch({ type: 'todo/fetchTodo', payload: 8 })
