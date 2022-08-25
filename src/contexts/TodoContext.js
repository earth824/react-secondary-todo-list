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

  const deleteTodo = id => {
    axios
      .delete('http://localhost:8080/todos/' + id)
      .then(() => {
        setTodos(todos.filter(item => item.id !== id));
        // setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
      })
      .catch(err => console.log(err));
  };

  const updateTodo = ({ title, completed }, id) => {
    axios
      .put('http://localhost:8080/todos/' + id, { title, completed })
      .then(res => {
        setTodos(todos.map(item => (item.id === id ? res.data.todo : item)));
      })
      .catch(err => console.log(err));
  };

  return (
    <TodoContext.Provider value={{ todos, createTodo, deleteTodo, updateTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
