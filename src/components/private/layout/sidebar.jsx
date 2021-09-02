const Sidebar = () => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-category">Menu Principal</li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <i className="menu-icon typcn typcn-document-text" />
                  <span className="menu-title">Dashboard</span>
                </a>
              </li>
            </ul>
          </nav>
    );
}

export default Sidebar;
