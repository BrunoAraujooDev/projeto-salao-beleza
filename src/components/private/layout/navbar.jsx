import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { clearStorage } from "../../../config/storage";
import { setNewAuth } from "../../../store/auth/action";

const NavBar = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const logout = () => {
    clearStorage();
    dispatch(setNewAuth({}))
    navigate("/");

  }


  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <SDIV className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <a className="navbar-brand brand-logo" href="index.html">
          Gestão 
        </a>
      </SDIV>
      <div className="navbar-menu-wrapper d-flex align-items-center">
        <UserMenu >
          <li className="nav-item font-weight-semibold d-none d-lg-block">
            Olá, {auth.user.username || "Painel de dashbord"}
          </li>
        </UserMenu>
        <ActionMenu>
          <li className="nav-item font-weight-semibold d-none d-lg-block">
            <button className="btn btn-sm btn-dark" onClick={logout}>Sair</button>
          </li>
        </ActionMenu>
      </div>
    </nav>
  );
};

export default NavBar;


const UserMenu = styled.ul.attrs({
  className: "navbar-nav"
})`
  flex: 1
`;

const ActionMenu = styled.ul.attrs({
  className: "navbar-nav"
  
})`
`;

const SDIV = styled.div`
  background: #262626 !important;
  
`;


