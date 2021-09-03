import { Redirect, Router } from "@reach/router";

import Public from "./view/public"
import Admin from "./view/admin"
import Client from "./view/client"
import Login from "./view/auth/login";
import { isAuthenticated } from "./config/storage";



const PrivateRoute = ({component : Component, ...rest}) => {

    if(!isAuthenticated()){
        <Redirect to="Login" noThrow/>
    }

    return <Component {...rest} />;
}


const Routers = () => {
    return (
        <Router>
            <Public path="/*" />
            <PrivateRoute component={Admin} path="/admin/*" />
            <PrivateRoute component={Client} path="/client/*" />
            <Login path="/login" />
        </Router>
    );
};


export default Routers;