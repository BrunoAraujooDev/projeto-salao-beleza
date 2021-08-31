import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import styled from "styled-components";
import CardServico from "../../components/public/Servico/cardServico";
import { getAllServices, selectService } from "../../store/servico/action";

const Servico = () => {

    const dispatch = useDispatch();

    const servicos = useSelector( state => state.servico.all);

    const callServices = (servico) => {
        dispatch(selectService(servico))
        .then( () =>navigate(`servico/${servico.id}`) )
        .catch( () => console.log("Ocorreu um erro!"));   
    };

    useEffect( () => { 
        dispatch(getAllServices());
    },[dispatch]);


    return (
        <Container>
            <ServicosContainer>
               {servicos.map( servico => 
                    <CardServico key={servico.id} data={servico} callServices={callServices}/>)}
            </ServicosContainer>

        </Container>
    )
}




export default Servico;


const ServicosContainer = styled.div`

    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 32px;
`;