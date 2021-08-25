import { Router } from "@reach/router";

import Public from "./view/public"
import Admin from "./view/admin"
import Client from "./view/client"


const Routers = () => {
    return (
        <Router>
            <Public path="/*" />
            <Admin path="/admin/*" />
            <Client path="/client/*" />
        </Router>
    );
};


export default Routers;