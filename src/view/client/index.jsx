import { Router } from "@reach/router";
import Home from "./home";
import PrivateLayout from "../../components/private/layout";
import ServicoDetalhes from "../public/servicoDetalhes";


const Client = () => (

    <Router>
        <PrivateLayout path="/">
            <Home path="/" />
            <ServicoDetalhes path="/servico/:id"/>
        </PrivateLayout>
    </Router>
);

export default Client;