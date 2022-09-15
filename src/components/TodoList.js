import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul className="list-group my-2">
      {todos.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
