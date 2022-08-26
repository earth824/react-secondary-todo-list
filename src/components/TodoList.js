import { useContext, useState } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../contexts/TodoContext';

function TodoList() {
  const [editingTodo, setEditingTodo] = useState({});
  const ctx = useContext(TodoContext);
  return (
    <ul className="list-group my-2">
      {ctx.state.todos.map(item => (
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
