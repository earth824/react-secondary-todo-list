import { LOAD_TODO } from '../actions/todoAction';

const initialTodoState = {
  todos: [],
  renderedTodos: [],
  searchText: '',
  searchStatus: null,
  sort: '',
  pageLimit: 10,
  currentPage: 1
};

// 1   10    0  -   9
// 2   10    10 - 19

function todoReducer(state, action) {
  switch (action.type) {
    case LOAD_TODO: {
      const todos = action.payload.todos;
      const { pageLimit, currentPage } = state;
      const renderedTodos = todos.slice(
        (currentPage - 1) * pageLimit,
        currentPage * pageLimit
      );
    }
  }
}
export default todoReducer;
export { initialTodoState };
