import TodoContent from './TodoContent';

function TodoItem({ todo }) {
  const { completed } = todo;
  return (
    <li
      className={`list-group-item p-3 callout-${
        completed ? 'success' : 'warning'
      }`}
    >
      <TodoContent todo={todo} />
    </li>
  );
}

export default TodoItem;
