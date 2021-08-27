import Navbar from "../navbar";
import styled from "styled-components";
import { Container } from "reactstrap";

const Header = () => {

    return (
        <HeaderBox>
            <Container>
                <Navbar/>
            </Container>
        </HeaderBox>
    );
}

export default Header;


const HeaderBox = styled.header`
    background-color: #eee;

`;