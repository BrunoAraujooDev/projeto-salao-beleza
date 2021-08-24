import { Router } from "@reach/router";
import Home from "./home";
import PublicLayout from "../../components/public/layout";


const Public = () => {

    (
    <PublicLayout>

    <Router>
        
        <Home path="/" />
    
    </Router>
    </PublicLayout>
    )

}

export default Public;