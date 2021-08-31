import { Router } from "@reach/router";
import Home from "./home";
import PublicLayout from "../../components/public/layout";
import Servico from "./servico";
import ServicoDetalhes from "./servicoDetalhes";


const Public = () => (

    <Router>
        <PublicLayout path="/">
            <Home path="/" />
            <Servico path="/servico" />
            <ServicoDetalhes path="/servico/:id" />
        </PublicLayout>
    </Router>
)



export default Public;