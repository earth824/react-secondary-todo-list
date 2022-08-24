import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/todos')
      .then(res => {
        setTodos(res.data.todos);
      })
      .catch(err => console.log(err));
  }, []);

  const createTodo = title => {
    axios
      .post('http://localhost:8080/todos', { title, completed: false })
      .then(res => {
        setTodos([res.data.todo, ...todos]);
      })
      .catch(err => console.log(err));
  };

  return (
    <TodoContext.Provider value={{ todos, createTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
