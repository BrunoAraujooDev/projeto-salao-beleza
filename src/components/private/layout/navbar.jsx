import { useSelector } from "react-redux";

const NavBar = ({ tipoAcesso }) => {
//   const auth = useSelector((state) => state.auth.auth);
  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <a className="navbar-brand brand-logo" href="index.html">
          Gestão de barbearia e salão de beleza
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center">
        <ul className="navbar-nav">
          <li className="nav-item font-weight-semibold d-none d-lg-block">
            {/* { tipoAcesso || "Painel de dashbord"} */}
            {/* vou remover depois */}
            {/* {auth.user.username} */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
