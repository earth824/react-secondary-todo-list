import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoContainer from '../components/TodoContainer';
import TodoForm from '../components/TodoForm';
import { addTodo, fetchTodo } from '../stores/todoSlice';

function Home() {
  // const todos = useSelector(function (state) {
  //   return state.todo.todos;
  // });

  // const todos = useSelector(state => {
  //   console.log(state)
  //   state.todo.todos;
  // });
  const todos = useSelector(({ todo: { todos } }) => todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm onSubmit={title => dispatch(addTodo(title))} />
      </div>
      <TodoContainer todos={todos} deleteTodo={() => {}} />
    </div>
  );
}

export default Home;
