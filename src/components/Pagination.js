function Pagination() {
  return (
    <ul className="pagination pagination-sm mb-0">
      <li className="page-item">
        <button className="page-link">
          <i className="fa-solid fa-angle-left small" />
        </button>
      </li>
      <li className="page-item">
        <button className="page-link">1</button>
      </li>
      <li className="page-item active">
        <button className="page-link">2</button>
      </li>
      <li className="page-item">
        <button className="page-link">3</button>
      </li>
      <li className="page-item">
        <button className="page-link">
          <i className="fa-solid fa-angle-right small" />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
