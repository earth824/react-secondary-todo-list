import { useEffect, useState } from 'react';
import axios from 'axios';

import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);
  const [triggerFilter, setTriggerFilter] = useState(false);

  const fetchTodos = async (queryString = '') => {
    try {
      const res = await axios.get('http://localhost:8080/todos' + queryString);
      setTodos(res.data.todos);
      setTotal(res.data.total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // axios
    //   .get('http://localhost:8080/todos')
    //   .then(res => {
    //     setTodos(res.data.todos);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // fetchTodos();
  }, []);

  const handleSubmitCreate = async title => {
    try {
      await axios.post('http://localhost:8080/todos', {
        title,
        completed: false
      });
      setTriggerFilter(!triggerFilter);
      // fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm onSubmit={handleSubmitCreate} />
      </div>
      <TodoContainer
        todos={todos}
        fetchTodos={fetchTodos}
        total={total}
        trigger={triggerFilter}
      />
    </div>
  );
}

export default App;
