import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";

const PublicLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default PublicLayout;

const LayoutContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

  `;

  const Main = styled.main`
    flex: 1;
  `;
