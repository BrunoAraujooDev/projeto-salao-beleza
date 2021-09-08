import { Router } from "@reach/router";
import Home from "./home";
import PrivateLayout from "../../components/private/layout";
import ServicoDetalhes from "../public/servicoDetalhes";
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



const Client = () => {

    document.title = "Cliente"

    const userRole = useSelector(state => state.auth.auth.user.role.type);
    const roleId = enumRole(userRole);

    const routerAuthorized = Menu.filter((route) => route.authorization.includes(roleId));

    return (
        <Router>
            <PrivateLayout path="/" tipoAcesso="Cliente">
                {Menu.map( ({component: Component, ...route},i) => (
                <Component {...route} key={i}/>
                ))}
                <ServicoDetalhes path="/servico/:id" />
                <Error404 default />
            </PrivateLayout>
        </Router>
    );
};

export default Client;