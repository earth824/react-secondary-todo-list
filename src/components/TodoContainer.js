import { Fragment, useEffect, useState } from 'react';
import PageLimit from './PageLimit';
import SearchStatus from './SearchStatus';
import SearchText from './SearchText';
import Sort from './Sort';
import TodoList from './TodoList';
import Pagination from './Pagination';

function TodoContainer(props) {
  const [searchText, setSearchText] = useState('');
  const [searchStatus, setSeachStatus] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    // const queryString = `?title=${searchText}&completed=${searchStatus}&sort=${sort}`;
    const queryString = [];
    if (searchText) {
      queryString.push('title=' + searchText);
    }
    if (searchStatus) {
      queryString.push('completed=' + searchStatus);
    }
    if (sort) {
      queryString.push('sort=' + sort);
    }

    const timerId = setTimeout(() => {
      props.fetchTodos(queryString.length ? '?' + queryString.join('&') : '');
    }, 1000);
    return () => clearTimeout(timerId);
  }, [searchText, searchStatus, sort]);

  return (
    <Fragment>
      <div className="my-2 d-flex gap-3">
        <SearchText
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onCancel={() => setSearchText('')}
        />
        <SearchStatus
          value={searchStatus}
          onChange={e => setSeachStatus(e.target.value)}
        />
      </div>
      <div className="my-2 d-flex justify-content-between">
        <PageLimit />
        <Sort value={sort} onChange={e => setSort(e.target.value)} />
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
