import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

function TodoItem({ todo, editingTodo, openEdit, closeEdit }) {
  const { completed, id } = todo;

  return (
    <li
      className={`list-group-item p-3 callout-${
        completed ? 'success' : 'warning'
      }`}
    >
      {editingTodo.id === id ? (
        <TodoForm todo={todo} closeEdit={closeEdit} />
      ) : (
        <TodoContent todo={todo} openEdit={openEdit} />
      )}
    </li>
  );
}

export default TodoItem;
