import axios from 'axios';

function TodoContent(props) {
  const handleClickDelete = async () => {
    try {
      await axios.delete('http://localhost:8080/todos/' + props.todo.id);
      props.fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickToggle = async () => {
    try {
      await axios.put('http://localhost:8080/todos/' + props.todo.id, {
        title: props.todo.title,
        completed: !props.todo.completed
      });
      props.fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button" onClick={props.openEdit}>
        {props.todo.title}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-outline-secondary"
          onClick={handleClickToggle}
        >
          <i
            className={`fa-solid fa-toggle-${
              props.todo.completed ? 'on' : 'off'
            }`}
          />
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
