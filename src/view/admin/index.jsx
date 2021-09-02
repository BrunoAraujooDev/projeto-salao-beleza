import { Router } from "@reach/router";
import Home from "./home";
import PrivateLayout from "../../components/private/layout";


const Admin = () => {

    document.title = "Administrador"

   return (
    <Router>

        <PrivateLayout path="/" tipoAcesso="Administrador">

            <Home path="/" />

        </PrivateLayout >

    </Router>
    );
}

export default Admin;
