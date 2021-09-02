import "../style.css";
import Sidebar from "./sidebar";
import NavBar from "./navbar";
import Main from "./main";

const PrivateLayout = ({ children, tipoAcesso }) => {
    return (
        <>
            <div className="container-scroller">
                <NavBar tipoAcesso={tipoAcesso} />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <Main>
                        {children}
                    </Main>
                </div>
            </div>

        </>
    );
};

export default PrivateLayout;