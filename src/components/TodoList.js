import { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../contexts/TodoContext';

function TodoList() {
  const ctx = useContext(TodoContext);
  return (
    <ul className="list-group my-2">
      {ctx.state.todos.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
