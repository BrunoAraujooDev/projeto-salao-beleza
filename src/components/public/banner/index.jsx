import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';
import { navigate } from "@reach/router";

const Banner = (props) => {
  return (
    <div>
      <SJumbotron>
        <h1 className="display-3">Barber saloon</h1>
        <p className="lead">Bem-vindo ao maior site de barbearias e salão de beleza do Rio de Janeiro.</p>
        <hr className="my-2" />
        <p>Aqui você encontra os melhores cabelereiros/barbeiros pertinho de você.</p>
        <p className="lead">
          <Button color="primary" onClick={ () => navigate("/servico")}>Confira aqui</Button>
        </p>
      </SJumbotron>
    </div>
  );
};

export default Banner;

const SJumbotron = styled(Jumbotron)`

    margin: 32px;
`;