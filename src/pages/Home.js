import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoContainer from '../components/TodoContainer';
import TodoForm from '../components/TodoForm';
import { getAllTodo } from '../stores/todoSlice';

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
    const fetchTodo = async () => {
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
    fetchTodo();
  }, []);

  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm onSubmit={() => {}} />
      </div>
      <TodoContainer todos={todos} deleteTodo={() => {}} />
    </div>
  );
}

export default Home;
