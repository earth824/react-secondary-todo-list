import TodoContent from './TodoContent';

function TodoItem({ todo }) {
  return (
    <li
      className={`list-group-item p-3 callout-${
        todo.completed ? 'success' : 'warning'
      }`}
    >
      <TodoContent todo={todo} />
    </li>
  );
}

export default TodoItem;
