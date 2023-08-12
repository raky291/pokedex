export function Header() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center my-4 py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">About</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
