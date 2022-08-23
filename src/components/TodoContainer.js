import { Fragment } from 'react';
import PageLimit from './PageLimit';
import SearchStatus from './SearchStatus';
import SearchText from './SearchText';
import Sort from './Sort';
import TodoList from './TodoList';
import Pagination from './Pagination';

function TodoContainer(props) {
  return (
    <Fragment>
      <div className="my-2 d-flex gap-3">
        <SearchText />
        <SearchStatus />
      </div>
      <div className="my-2 d-flex justify-content-between">
        <PageLimit />
        <Sort />
      </div>
      <TodoList todos={props.todos} fetchTodos={props.fetchTodos} />
      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 6 to 10 of 12 entries</small>
        <Pagination />
      </div>
    </Fragment>
  );
}

export default TodoContainer;
