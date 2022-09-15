import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Todo App
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
