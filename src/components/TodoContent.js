function TodoContent() {
  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button">
        Watch movie
      </span>
      <div className="btn-group">
        <button className="btn btn-outline-secondary">
          <i className="fa-solid fa-toggle-off" />
        </button>
        <button className="btn btn-outline-secondary">
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}

export default TodoContent;
