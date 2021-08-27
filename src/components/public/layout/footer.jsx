import styled from "styled-components";

const Footer = () => {

    return (
        <FooterBox>
            Todos os direitos reservados.
        </FooterBox>

    );
}

export default Footer;

const FooterBox = styled.footer`
display: flex;
    color: #fff;
    background-color: #252525;
    justify-content: center;
    align-items: center;
    height: 4rem;
`;