import { Router } from "@reach/router";

import Home from "./home";
import Clients from "./clients";

import PrivateLayout from "../../components/private/layout";
import { useSelector } from "react-redux";
import { enumRole } from "../../util/roles";

import Error404 from "../error/error404";
import ServicoDetalhes from "../public/servicoDetalhes";


const Menu = [
    {
        title: "Home",
        path: "/",
        component: Home,
        authorization: [1,2]
    },
    {
        title: "Clientes",
        path: "/clientes",
        component: Clients,
        authorization: [1]
    }
]


const Private = ({ location, uri, profile }) => {

    document.title = "Administrador";

    const userRole = useSelector(state => state.auth.auth.user.role.type);
    const roleId = enumRole(userRole);

    const routerAuthorized = Menu.filter((route) => route.authorization.includes(roleId));

    const currentRoute = Menu.find(item => item.path === `/${location.pathname.split("/")[2]}`|| "");

   return (
    <Router>
        <PrivateLayout path="/" 
        tipoAcesso={profile || ""}
        current={currentRoute} 
        menu={routerAuthorized} 
        uri={uri}
        >
            {routerAuthorized.map( ({component: Component, ...route},i) => (
                <Component {...route} key={i}/>
            ))}
            <ServicoDetalhes path="/servico/:id" /> 
            <Error404 default/>
        </PrivateLayout >

    </Router>
    );
}

export default Private;
