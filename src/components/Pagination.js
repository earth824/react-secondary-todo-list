function Pagination(props) {
  // numPage:4 => [1, 2, 3, 4]
  return (
    <ul className="pagination pagination-sm mb-0">
      <li className="page-item">
        <button
          className={`page-link ${props.currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => props.onClick(props.currentPage - 1)}
        >
          <i className="fa-solid fa-angle-left small" />
        </button>
      </li>
      {new Array(props.numPage).fill().map((_, i) => (
        <li
          className={`page-item ${props.currentPage === i + 1 ? 'active' : ''}`}
          key={i}
        >
          <button className="page-link" onClick={() => props.onClick(i + 1)}>
            {i + 1}
          </button>
        </li>
      ))}
      <li className="page-item">
        <button
          className={`page-link ${
            props.currentPage === props.numPage ? 'disabled' : ''
          }`}
          onClick={() => props.onClick(props.currentPage + 1)}
        >
          <i className="fa-solid fa-angle-right small" />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
