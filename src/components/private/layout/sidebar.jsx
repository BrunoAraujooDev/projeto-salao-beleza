import { Link } from "@reach/router";
import { useSelector } from "react-redux";
import styled from "styled-components";


const Sidebar = ({menu, uri}) => {

  const roleName = useSelector(state => state.auth.auth.user.role.name)

    return (
        <NavMenu className="sidebar sidebar-offcanvas" id="sidebar">
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
          </NavMenu>
    );
}

export default Sidebar;


const NavMenu = styled.nav`
  background: #262626;
  &:hover{
    background: #262626;
  }
`
