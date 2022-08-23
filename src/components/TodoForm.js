import { useState } from 'react';
import axios from 'axios';

function TodoForm(props) {
  const [title, setTitle] = useState('');

  const handleSubmitForm = async e => {
    e.preventDefault();
    // validate first

    // success validation
    try {
      const res = await axios.post('http://localhost:8080/todos', {
        title,
        completed: false
      });
      props.fetchTodos();
      setTitle('');
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
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
