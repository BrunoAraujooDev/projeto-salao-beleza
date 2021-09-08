import { Router } from "@reach/router";
import Home from "./home";
import PrivateLayout from "../../components/private/layout";
import { useSelector } from "react-redux";
import { enumRole } from "../../util/roles";
import Error404 from "../error/error404";


const Menu = [
    {
        title: "Home",
        path: "/",
        component: Home,
        authorization: [1,2]
    }
]


const Admin = () => {

    document.title = "Administrador";

    const userRole = useSelector(state => state.auth.auth.user.role.type);
    const roleId = enumRole(userRole);

    const routerAuthorized = Menu.filter((route) => route.authorization.includes(roleId));

   return (
    <Router>
        <PrivateLayout path="/" tipoAcesso="Administrador">
            {routerAuthorized.map( ({component: Component, ...route},i) => (
                <Component {...route} key={i}/>
            ))}
            <Error404 default/>
        </PrivateLayout >

    </Router>
    );
}

export default Admin;
