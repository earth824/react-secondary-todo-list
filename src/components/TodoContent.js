import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function TodoContent({ todo: { title, completed, id } }) {
  const ctx = useContext(TodoContext);
  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button">
        {title}
      </span>
      <div className="btn-group">
        <button className="btn btn-outline-secondary">
          <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`} />
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => ctx.deleteTodo(id)}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}

export default TodoContent;
