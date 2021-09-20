import { Redirect, Router } from "@reach/router";

import Public from "./view/public"
import Private from "./view/private"
import Login from "./view/auth/login";
import { isAuthenticated } from "./config/storage";
import { useSelector } from "react-redux";
import { enumRole } from "./util/roles";
import Error404 from "./view/error/error404";
import { routeOutside } from "./config/auth";
import Register from "./view/auth/register";


const Routers = () => {

    const userRole = useSelector(state => state.auth.auth?.user?.role?.type);
    const roleId = enumRole(userRole);

const PrivateRoute = ({component : Component, ...rest}) => {

    const estaLogado = rest.path === "/login";

    if(!isAuthenticated() && !estaLogado ){
       return <Redirect to="Login" noThrow/>
    }
    if(isAuthenticated() && estaLogado ){
       return <Redirect to={routeOutside[userRole]} noThrow/>
    }
    if(userRole && rest.type !== roleId){
        return <Error404/>
    }

    return <Component {...rest} />;
}



    return (
        <Router>
            <PrivateRoute component={Login} path="/login" />
            <Public path="/*" />
            <Register path="/signup" />
            <PrivateRoute component={Private} path="/admin/*" profile="admin" type={1}/>
            <PrivateRoute component={Private} path="/client/*" profile="client" type={2}/>
            <Login path="/login" />
        </Router>
    );
};


export default Routers;