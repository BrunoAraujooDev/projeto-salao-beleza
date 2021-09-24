import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';
import { navigate } from "@reach/router";

const Banner = () => {
  return (
    <div>
      <SJumbotron>
        <h1 className="display-1 text-center">Barber saloon</h1>
        <SP className="lead">Bem-vindo ao maior site de barbearias e salão de beleza do Rio de Janeiro.</SP>
        <SP className="lead">Aqui você encontra os melhores cabelereiros/barbeiros pertinho de você.</SP>
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
  width: 20rem;
  color: #fff;
  border-radius: 0px;
  border: 1px solid #000;
  box-shadow: 0 2px 4px #000;
  &:hover {
    background-color: #7d3011;
    border-color: #000;
  }
`;

const SP = styled.p`
  font-size: 2rem;
  text-align: center;
`;