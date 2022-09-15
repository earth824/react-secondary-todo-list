import axios from 'axios';
import { useEffect, useState } from 'react';

import TodoContainer from '../components/TodoContainer';
import TodoForm from '../components/TodoForm';

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get('http://localhost:8007/todos', {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        });
        setTodos(res.data.todos);
      } catch (err) {
        alert('Fetch todo error');
      }
    };

    fetchTodo();
  }, []);

  const createTodo = async title => {
    try {
      const res = await axios.post(
        'http://localhost:8007/todos',
        { title },
        {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }
      );
      setTodos([res.data.todo, ...todos]);
    } catch (err) {
      alert('Error create todo');
    }
  };

  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm onSubmit={createTodo} />
      </div>
      <TodoContainer todos={todos} />
    </div>
  );
}

export default Home;
