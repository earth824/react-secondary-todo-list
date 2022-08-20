function App() {
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        {/* ********** ADD TODO FORM ********** */}
        <form>
          <div className="input-group">
            <input type="text" className="form-control" />
            <button className="btn btn-primary">
              <i className="fa-solid fa-check" />
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          {/* <small className="text-danger">Title is required.</small> */}
        </form>
        {/* ********** END ADD TODO FORM ********** */}
      </div>

      <div className="my-2 d-flex gap-3">
        {/* ********** SEARCH TEXT ********** */}
        <div className="input-group">
          <input type="text" className="form-control" />
          <button className="btn btn-outline-secondary">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        {/* ********** END SEARCH TEXT ********** */}

        {/* ********** SEARCH STATUS ********** */}
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
        {/* ********** END SEARCH STATUS ********** */}
      </div>

      <div className="my-2 d-flex justify-content-between">
        {/* ********** PAGE LIMIT ********** */}
        <div className="d-flex gap-2 align-items-center">
          <small className="text-muted">Display</small>
          <select
            className="form-select form-select-sm"
            style={{ width: '5rem' }}
          >
            <option>5</option>
            <option>10</option>
            <option>25</option>
          </select>
        </div>
        {/* ********** END PAGE LIMIT ********** */}

        {/* ********** SORT BY ********** */}
        <div className="d-flex gap-2 align-items-center">
          <small className="text-muted">Sort by</small>
          <select
            className="form-select form-select-sm"
            style={{ width: '8rem' }}
          >
            <option>Title: A-Z</option>
            <option>Title: Z-A</option>
          </select>
        </div>
        {/* ********** END SORT BY ********** */}
      </div>

      {/* ********** TODO LIST ********** */}
      <ul className="list-group my-2">
        {/* ********** TODO ITEM#1 ********** */}
        <li className="list-group-item p-3 callout-warning">
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
        </li>
        {/* ********** END TODO ITEM#1 ********** */}

        {/* ********** TODO ITEM#2 ********** */}
        <li className="list-group-item p-3 callout-warning">
          <div className="d-flex align-items-center">
            <span className="flex-fill" role="button">
              Play Game
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
        </li>
        {/* ********** END TODO ITEM#2 ********** */}

        {/* ********** TODO ITEM#3 ********** */}
        <li className="list-group-item p-3 callout-success">
          <div className="d-flex align-items-center">
            <span className="flex-fill" role="button">
              Drink beer
            </span>
            <div className="btn-group">
              <button className="btn btn-outline-secondary">
                <i className="fa-solid fa-toggle-on" />
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fa-regular fa-trash-can" />
              </button>
            </div>
          </div>
        </li>
        {/* ********** END TODO ITEM#3 ********** */}

        {/* ********** TODO ITEM#4 ********** */}
        <li className="list-group-item p-3 callout-success">
          <div className="d-flex align-items-center">
            <span className="flex-fill" role="button">
              Swimming
            </span>
            <div className="btn-group">
              <button className="btn btn-outline-secondary">
                <i className="fa-solid fa-toggle-on" />
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fa-regular fa-trash-can" />
              </button>
            </div>
          </div>
        </li>
        {/* ********** END TODO ITEM#4 ********** */}

        {/* ********** TODO ITEM#5 ********** */}
        <li className="list-group-item p-3 callout-warning">
          <div className="d-flex align-items-center">
            <span className="flex-fill" role="button">
              Running
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
        </li>
        {/* ********** END TODO ITEM#5 ********** */}
      </ul>
      {/* ********** END TODO LIST ********** */}

      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 6 to 10 of 12 entries</small>
        {/* ********** PAGINATION ********** */}
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
        {/* ********** END PAGINATION ********** */}
      </div>
    </div>
  );
}

export default App;
