import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-4">
      <div className="container d-flex justify-content-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
