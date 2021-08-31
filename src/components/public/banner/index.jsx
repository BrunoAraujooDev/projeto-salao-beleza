import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';
import { navigate } from "@reach/router";

const Banner = () => {
  return (
    <div>
      <SJumbotron>
        <h1 className="display-3">Barber saloon</h1>
        <p className="lead">Bem-vindo ao maior site de barbearias e salão de beleza do Rio de Janeiro.</p>
        <p>Aqui você encontra os melhores cabelereiros/barbeiros pertinho de você.</p>
        <SParagrafo className="lead">
          <SButton  onClick={ () => navigate("/servico")}>CONFIRA AQUI</SButton>
        </SParagrafo>
      </SJumbotron>
    </div>
  );
};

export default Banner;

const SJumbotron = styled(Jumbotron)`
    color: #fff;
    margin-top: 6rem;
    
`;

const SParagrafo = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}
`;

const SButton = styled(Button)`

  background-color: #944E32;
  color: #fff;
  border-radius: 0px;
  border: 1px solid #000;
  box-shadow: 0 2px 4px #000;
  &:hover {
    background-color: #7d3011;
    border-color: #000;
  }
`;