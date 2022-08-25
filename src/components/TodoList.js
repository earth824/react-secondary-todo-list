import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const ctx = useContext(TodoContext);
  const [editingTodo, setEditingTodo] = useState({});
  return (
    <ul className="list-group my-2">
      {ctx.todos.map(item => (
        <TodoItem
          key={item.id}
          todo={item}
          editingTodo={editingTodo}
          openEdit={() => setEditingTodo(item)}
          closeEdit={() => setEditingTodo({})}
        />
      ))}
    </ul>
  );
}

export default TodoList;
