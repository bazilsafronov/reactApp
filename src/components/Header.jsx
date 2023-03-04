function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__section">
          <h1 className="logo__header">React App</h1>
          <div className="header__menu">
            <ul className="heade_list">
              <li className="header__item">Home</li>
              <li className="header__item"> Catalog</li>
              <li className="header__item"> About us</li>
              <li className="header__item"> Contacts</li>
            </ul>
          </div>

          <div className="header_auth">
            <a className="header__auth"> Sign-in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
