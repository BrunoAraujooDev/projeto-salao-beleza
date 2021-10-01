import React from 'react';
import {
   CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components';
import foto from "../../../assets/images/foto.jpg"

const urlApi = process.env.REACT_APP_API

const CardServico = ({ data, callServices }) => {



  return (
    <CardServicoSection>
      <SCard>
        <SCardImg width="50%" src={ data.imagem ? urlApi+data.imagem.url : foto } alt={data.titulo} />
        <SCardBody>
          <CardTitle tag="h5">{data.titulo}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 ">Rua {data.endereco}</CardSubtitle>
          <CardText>
            {data.descricao}
          </CardText>
          <SButton botao onClick={(e) => callServices(e, data)}>Visualizar</SButton>
        </SCardBody>
      </SCard>
    </CardServicoSection>
  );
};

export default CardServico;


const CardServicoSection = styled.section`
  color: #fff;
  &:first-child{
    margin: 56px 0px 0px 0px;

  }
`;

const SCard = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 20rem;
  background-color: unset;
  border-width: 0px 0px 5px 0px;
  border-style: solid;
  border-color: #B98E52;
  word-wrap: break-word;
  position: relative;
`;


const SCardImg = styled(CardImg)`
  width: 30rem;
  height: auto;
`;

const SCardBody= styled(CardBody)`
  display: flex;
  flex-direction: column;
`;

const SButton = styled(Button)`
  width: 9rem;
  margin-top: 2rem;
  align-self: flex-end;
  background-color: #944E32;
  border: none;
  border-radius: 0px;
  &:hover{
    background-color: #7d3011;
  }
`;

