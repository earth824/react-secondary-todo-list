import { useState } from 'react';

function TodoForm({ onSubmit, todo, onCancel }) {
  const [input, setInput] = useState(todo?.title || '');

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  const handleClickCancel = () => {
    setInput('');
    onCancel?.();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="btn btn-primary">
          <i className="fa-solid fa-check" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleClickCancel}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      {/* <small className="text-danger">Title is required.</small> */}
    </form>
  );
}

export default TodoForm;
