import TodoContent from './TodoContent';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li
      className={`list-group-item p-3 callout-${
        todo.completed ? 'success' : 'warning'
      }`}
    >
      <TodoContent todo={todo} deleteTodo={deleteTodo} />
    </li>
  );
}

export default TodoItem;
