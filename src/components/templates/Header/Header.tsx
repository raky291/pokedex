import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-bottom shadow-sm z-1">
      <div className="container d-flex justify-content-center py-4">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <NavLink to="/" end className="nav-link">
              Pokédex
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
