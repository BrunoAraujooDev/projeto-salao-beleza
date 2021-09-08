import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jumbotron, Button, Container } from 'reactstrap';
import * as R from "ramda";
import { selectServiceByID } from '../../store/servico/action';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import foto from "../../assets/images/barberutils.jpg"


const urlAPI = process.env.REACT_APP_API


const ServicoDetalhes = ( {id} ) => {

    const servicoSelecionado = useSelector( state => state.servico.selected)
    const dispatch = useDispatch();

    useEffect( () => {
        if(R.isEmpty(servicoSelecionado)){
            dispatch(selectServiceByID(id))
        }
        
    }, [dispatch, id, servicoSelecionado])

    const contratar = (servico) => navigate(`/client/service/${servico.id}`)

  return (
    <SContainer>
      <SJumbotron>
        <SDIVIMG>
          <SIMG src={servicoSelecionado.imagem ?  urlAPI+servicoSelecionado.imagem.url  : foto} alt="Imagem do salão"/>
          <SH1 className="display-3">{servicoSelecionado.titulo}</SH1>
        </SDIVIMG>
        <SDIV>
          <p><b>Tipo:</b> {servicoSelecionado.tipo}</p>
          <p><b>Endereço:</b> {servicoSelecionado.endereco}</p>
          <p><b>Telefone:</b> {servicoSelecionado.telefone}</p>
          <p className="lead">{servicoSelecionado.descricao}</p>
          <DIVBOTAO className="lead">
            <SButton  onClick={() => contratar(servicoSelecionado) }>Agendar</SButton>
          </DIVBOTAO>
        </SDIV>
      </SJumbotron>
    </SContainer>
  );
};

export default ServicoDetalhes;


const SContainer = styled(Container)`

    display: flex;
    justify-content: center;
    height: 78vh;
`;

const SJumbotron = styled(Jumbotron)`
    display: flex;
    color: #000;
    padding: 5px 10px;
    margin-top: 6rem;
    background-color: #fff;
    max-height: 500px;
    
`;

const SH1 = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: bold;
  margin-top: 40px;
`;

const SButton = styled(Button)`

  background-color: #944E32;
  margin-top: 5rem;
  width: 10rem;
  color: #fff;
  border-radius: 0px;
  border: 1px solid #000;
  box-shadow: 0 2px 4px #000;
  &:hover {
    background-color: #7d3011;
    border-color: #000;
  }
`;

const SDIVIMG = styled.div`
  position: relative;
  left: -10px;
  top: -5px;
  width: 100%;
  height: 500px;
  background-color: #000;
`;

const SIMG = styled.img`
  width: 100%;
  padding: 15px;
  height: 50%;
  border-radius: 20px;
`;

const SDIV = styled.div`
  padding: 15px;
`;



const DIVBOTAO = styled.div`
  display: flex;
  justify-content: flex-end;
`;