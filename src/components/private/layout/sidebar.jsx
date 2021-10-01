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

              <SLI className="nav-item" key={i}>
                <SLINK to={uri+item.path}>
                  <span className="menu-title">{item.title}</span>
                </SLINK>
              </SLI>
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

const SLI = styled.li`
    position: relative;
    transition-duration: 0.3s;
    text-decoration: none;
    align-items: center;
    display: flex;
    white-space: nowrap;
      &:hover {
        background-color: #F3F3F3;
      }

    `;
    
    const SLINK = styled(Link)`
      text-decoration: none;
      padding: 15px 30px 15px 55px;
      height: 52px;
      width: 100%;
      color: #fff;
      &:hover{
        color: #212529;
      }
    `;
    