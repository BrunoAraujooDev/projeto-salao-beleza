import { Router } from "@reach/router";
import Home from "./home";
import PrivateLayout from "../../components/private/layout";


const Client = () => (

    <Router>
        <PrivateLayout path="/">
            <Home path="/" />
        </PrivateLayout>
    </Router>
);

export default Client;