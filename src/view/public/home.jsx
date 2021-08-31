import { Container } from "reactstrap";
import Banner from "../../components/public/banner";
import styled from "styled-components";


const Home = () => {

    return (
        <SContainer>
            <Banner />
        </SContainer>
    );
};

export default Home;


const SContainer = styled(Container)`

    display: flex;
    justify-content: center;
    height: 78vh;
`;