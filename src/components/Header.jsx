const Nav = () => {
  return (
    <nav className="bg-[#868686] md:bg-transparent p-0 border-0 rounded-none">
      <div className="px-5 flex">
        <a className="navbar-brand logo_h" href="#">
          <img
            style={{ padding: 15 }}
            width="200"
            src="/images/logo.png"
            alt=""
          />
        </a>
        <button
          className="hidden"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar"></span> <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div
          className="collapse navbar-collapse offset"
          id="navbarSupportedContent"
        >
          <ul
            style={{ color: "white" }}
            className="nav navbar-nav menu_nav ml-auto"
          >
            <li className="nav-item active">
              <a className="nav-link" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
            <li className="nav-item submenu dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export const Header = () => {
  return (
    <header className="absolute w-full">
      <div className="main_menu">
        <Nav />
      </div>
    </header>
  );
};
