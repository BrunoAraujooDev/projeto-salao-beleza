import { Link } from "@reach/router";
import { useSelector } from "react-redux";


const Sidebar = ({menu, uri}) => {

  const roleName = useSelector(state => state.auth.auth.user.role.name)

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-category">Tipo: {roleName}</li>
              {menu?.map( (item, i) => (

              <li className="nav-item" key={i}>
                <Link className="nav-link" to={uri+item.path}>
                  <i className="menu-icon typcn typcn-document-text" />
                  <span className="menu-title">{item.title}</span>
                </Link>
              </li>
              ))}
            </ul>
          </nav>
    );
}

export default Sidebar;
