import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const ctx = useContext(TodoContext);
  return (
    <ul className="list-group my-2">
      {ctx.todos.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
