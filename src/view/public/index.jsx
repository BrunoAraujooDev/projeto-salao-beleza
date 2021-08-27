import { Router } from "@reach/router";
import Home from "./home";
import PublicLayout from "../../components/public/layout";
import Servico from "./servico";


const Public = () => (

    <Router>
        <PublicLayout path="/">
            <Home path="/" />
            <Servico path="/servico" />
        </PublicLayout>
    </Router>
)



export default Public;