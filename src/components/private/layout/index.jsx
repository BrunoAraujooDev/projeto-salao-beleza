import "../style.css";
import Sidebar from "./sidebar";
import NavBar from "./navbar";
import Main from "./main";

const PrivateLayout = ({ children, tipoAcesso, current, menu, uri }) => {
    return (
        <>
            <div className="container-scroller">
                <NavBar tipoAcesso={tipoAcesso} />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar menu={menu} uri={uri}/>
                    <Main title={current?.title || ""}>
                        {children}
                    </Main>
                </div>
            </div>

        </>
    );
};

export default PrivateLayout;