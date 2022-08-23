function SearchStatus() {
  return (
    <div className="btn-group">
      <input
        type="radio"
        className="btn-check"
        name="status"
        id="all"
        defaultChecked
      />
      <label className="btn btn-outline-secondary" htmlFor="all">
        <i className="fa-solid fa-list-ul" />
      </label>
      <input
        type="radio"
        className="btn-check"
        name="status"
        value="completed"
        id="completed"
      />
      <label className="btn btn-outline-secondary" htmlFor="completed">
        <i className="fa-solid fa-clipboard-check" />
      </label>
      <input
        type="radio"
        className="btn-check"
        name="status"
        value="pending"
        id="pending"
      />
      <label className="btn btn-outline-secondary" htmlFor="pending">
        <i className="fa-regular fa-clipboard" />
      </label>
    </div>
  );
}

export default SearchStatus;
