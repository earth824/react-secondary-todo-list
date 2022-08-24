function SearchStatus(props) {
  return (
    <div className="btn-group">
      <input
        type="radio"
        className="btn-check"
        name="status"
        id="all"
        value=""
        onChange={props.onChange}
        checked={props.value === ''}
      />
      <label className="btn btn-outline-secondary" htmlFor="all">
        <i className="fa-solid fa-list-ul" />
      </label>
      <input
        type="radio"
        className="btn-check"
        name="status"
        value="true"
        id="completed"
        onChange={props.onChange}
        checked={props.value === 'true'}
      />
      <label className="btn btn-outline-secondary" htmlFor="completed">
        <i className="fa-solid fa-clipboard-check" />
      </label>
      <input
        type="radio"
        className="btn-check"
        name="status"
        value="false"
        id="pending"
        onChange={props.onChange}
        checked={props.value === 'false'}
      />
      <label className="btn btn-outline-secondary" htmlFor="pending">
        <i className="fa-regular fa-clipboard" />
      </label>
    </div>
  );
}

export default SearchStatus;
