import { Router } from "@reach/router";
import Home from "./home";
import PrivateLayout from "../../components/private/layout";


const Admin = () => {

   return (
    <Router>

        <PrivateLayout path="/">

            <Home path="/" />

        </PrivateLayout >

    </Router>
    );
}

export default Admin;
