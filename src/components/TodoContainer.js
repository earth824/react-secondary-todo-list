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
  const [pageLimit, setPageLimit] = useState('5');
  const [currentPage, setCurrentPage] = useState(1);

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
    queryString.push('page=' + currentPage);
    queryString.push('limit=' + pageLimit);

    const timerId = setTimeout(() => {
      props.fetchTodos(queryString.length ? '?' + queryString.join('&') : '');
    }, 1000);
    return () => clearTimeout(timerId);
  }, [searchText, searchStatus, sort, pageLimit, currentPage]);

  const numPage = Math.ceil(props.total / pageLimit);

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
        <PageLimit
          value={pageLimit}
          onChange={e => {
            setPageLimit(e.target.value);
            setCurrentPage(1);
          }}
        />
        <Sort value={sort} onChange={e => setSort(e.target.value)} />
      </div>
      <TodoList todos={props.todos} fetchTodos={props.fetchTodos} />
      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">
          Showing {(currentPage - 1) * pageLimit + 1} to{' '}
          {currentPage === numPage ? props.total : currentPage * pageLimit} of{' '}
          {props.total} entries
        </small>
        <Pagination
          numPage={numPage}
          currentPage={currentPage}
          onClick={page => setCurrentPage(page)}
        />
      </div>
    </Fragment>
  );
}

export default TodoContainer;
