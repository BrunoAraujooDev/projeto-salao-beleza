import { Router } from "@reach/router";
import Home from "./home";
import PublicLayout from "../../components/public/layout";


const Public = () => (

    <Router>
        <PublicLayout path="/">
            <Home path="/" />
        </PublicLayout>
    </Router>
)



export default Public;