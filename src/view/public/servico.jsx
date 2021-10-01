import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import styled from "styled-components";
import CardServico from "../../components/public/Servico/cardServico";
import { editService, getAllServices, selectService } from "../../store/servico/action";

const Servico = () => {

    const servicos = useSelector( state => state.servico.all);
    const dispatch = useDispatch();
    const [bairro, setBairro] = useState([""]);
    const [barbearia, setBarbearia] = useState([]);
    const [servicoAtualizado, setServicoAtualizado] = useState(1);


    const handleDistrict = () => {
         const _bairro = servicos.map( item => item.bairro)
         const bairro2 = [...new Set(_bairro)]
         setBairro(bairro2);
         
    }
    
    const filterDistrict = (e) => {
        if(e.target.value !== "Todos"){
            const _servico = servicos.filter( item => item.bairro === e.target.value);
            return setBarbearia(_servico);
        } else{
            return setBarbearia(servicos);
        }
        
    }
    
 
    const callServices = (e, servico) => {
        if(e){
            setServicoAtualizado(servicoAtualizado + 1)
            servico.contador += servicoAtualizado;

        }
        dispatch(editService(servico))
        dispatch(selectService(servico))
        .then( () =>navigate(`servico/${servico.id}`) )
        .catch( () => console.log("Ocorreu um erro!")); 
    };

    useEffect( () => { 
        dispatch(getAllServices());
    },[dispatch]);

    useEffect( () => {
        setBarbearia([...servicos])
    }, [servicos])


    return (
        <Container onLoad={handleDistrict}>
            <Busca type="select" name="select" placeholder="Digite seu bairro aqui" onChange={(e) => filterDistrict(e)}>

                <option disabled>Escolha aqui o bairro mais próximo</option>
                <option value="Todos">Todos</option>
                {bairro.map(item => {
                   return <option key={item} value={item}>{item}</option>
                })}
            </Busca>
            <ServicosContainer>
               {barbearia.map( servico => 
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


const Busca = styled.select`
    margin-top: 200px;
    margin-bottom: 72px;
    position: relative;
    right: -250px;
    width: 60%;
    height: 50px;
    padding: 10px 15px;
    border: 2px solid #000;
    box-shadow: 0 1px 4px #000;

`;