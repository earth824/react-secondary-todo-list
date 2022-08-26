import { useContext } from 'react';
import { DELETE_TODO } from '../actions/todoAction';
import axios from '../config/axios';
import { TodoContext } from '../contexts/TodoContext';

function TodoContent({ todo: { title, completed, id }, openEdit }) {
  const ctx = useContext(TodoContext);
  const handleClickDelete = () => {
    axios
      .delete('/todos/' + id)
      .then(() => {
        ctx.dispatch({ type: DELETE_TODO, payload: { id } });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button" onClick={openEdit}>
        {title}
      </span>
      <div className="btn-group">
        <button className="btn btn-outline-secondary">
          <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`} />
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={handleClickDelete}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}

export default TodoContent;
