import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";
import fundo from "../../../assets/images/salao.jpg"


const PublicLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Divbackground>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </Divbackground>
    </LayoutContainer>
  );
};

export default PublicLayout;

const LayoutContainer = styled.div`

    width: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image:  url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

  `;

  const Divbackground = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.63);
    min-height: 100vh;
  `;

const Main = styled.main`
    flex: 1;
  `;
