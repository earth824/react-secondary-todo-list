function PageLimit() {
  return (
    <div className="d-flex gap-2 align-items-center">
      <small className="text-muted">Display</small>
      <select className="form-select form-select-sm" style={{ width: '5rem' }}>
        <option>5</option>
        <option>10</option>
        <option>25</option>
      </select>
    </div>
  );
}

export default PageLimit;
