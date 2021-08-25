import { useDispatch } from "react-redux";
import { getAllServices } from "../../store/servico/action";

const Home = () => {

    const dispatch = useDispatch();

    const getServices = () => dispatch(getAllServices());

    return (
        <div>
            <h1>Home do public</h1>
            <button onClick={getServices}>Serviços</button>
        </div>
    );
};

export default Home;