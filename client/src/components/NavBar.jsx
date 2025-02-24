function NavBar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p className="navbar-item is-size-5 has-text-weight-bold">
          GraphQL Chat
        </p>
      </div>
      <div className="navbar-end">
        {Boolean(user) && (
          <div className="navbar-item">
            <button className="button is-link" onClick={onLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
