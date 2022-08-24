import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function TodoForm() {
  const [title, setTitle] = useState('');
  const ctx = useContext(TodoContext);

  const handleSubmitForm = e => {
    e.preventDefault();
    ctx.createTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button className="btn btn-primary">
          <i className="fa-solid fa-check" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setTitle('')}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      {/* <small className="text-danger">Title is required.</small> */}
    </form>
  );
}

export default TodoForm;
