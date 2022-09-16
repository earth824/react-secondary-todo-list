import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="list-group my-2">
      {todos.map(item => (
        <TodoItem key={item.id} todo={item} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
