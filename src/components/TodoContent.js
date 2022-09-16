function TodoContent({ todo, deleteTodo }) {
  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button">
        {todo.title}
      </span>
      <div className="btn-group">
        <button className="btn btn-outline-secondary">
          <i
            className={`fa-solid fa-toggle-${todo.completed ? 'on' : 'off'}`}
          />
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => deleteTodo(todo.id)}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}

export default TodoContent;
