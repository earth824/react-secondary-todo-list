import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

function TodoItem({ todo, editingTodo, openEdit }) {
  const { completed, id } = todo;

  return (
    <li
      className={`list-group-item p-3 callout-${
        completed ? 'success' : 'warning'
      }`}
    >
      {editingTodo.id === id ? (
        <TodoForm />
      ) : (
        <TodoContent todo={todo} openEdit={openEdit} />
      )}
    </li>
  );
}

export default TodoItem;
