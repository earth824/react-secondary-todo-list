import TodoContent from './TodoContent';

function TodoItem() {
  return (
    <li className="list-group-item p-3 callout-warning">
      <TodoContent />
    </li>
  );
}

export default TodoItem;
