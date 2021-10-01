import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Info from "../../components/private/info/info";
import { getAllServices } from "../../store/servico/action";
import scissor from "../../assets/images/scissor.png";
import views from "../../assets/images/views.png";
import chat from "../../assets/images/chat.png";


const Home = () => {

    const dispatch = useDispatch();
    const usuario = useSelector(state => state.auth.auth.user)
    const servicos = useSelector( state => state.servico.all);
    const [pegarServico, setPegarServico] = useState([]);


    const total = pegarServico.reduce((total, item) => total + item.contador, 0)
    const totalMensagem = pegarServico.reduce((total, item) => total + item.mensagem, 0)
    

    
    
    useEffect(() => {
        dispatch(getAllServices())
    }, [dispatch])

    useEffect(() => {
        setPegarServico([...servicos])
    }, [servicos])


    if(usuario.role.name === "Administrador"){
        return (
            <>
                <SH2>Painel de controle administrativo</SH2>
            <Cards>
                <SDIV>
                    <SFigure>
                        <figcaption>{pegarServico.length}</figcaption>
                        <SImg src={scissor} alt="Ícone de barbearia e salão de beleza"/>
                    </SFigure>
                    <Paragrafo>Estabelecimentos</Paragrafo>
                </SDIV>
                <SDIV>
                    <SFigure>
                        <figcaption>{total || ""}</figcaption>
                        <SImg src={views} alt="Ícone de visualização"/>
                    </SFigure>
                    <Paragrafo>Visualizações</Paragrafo>
                </SDIV>
                <SDIV>
                    <SFigure>
                        <figcaption>{totalMensagem || ""}</figcaption>
                        <SImg src={chat} alt="Ícone de visualização"/>
                    </SFigure>
                    <Paragrafo>Mensagens</Paragrafo>
                </SDIV>
            </Cards>


            </>
        )
    }
    

    return (
        <>
            <h2>Informações gerenciais</h2>
            <Info usuario={usuario} servico={usuario.servico || ""}/>
        </>
    )

}

export default Home;


const SH2 = styled.h2`
    margin: 32px 0px 64px 0px;
    font-weight: bolder;
`;

const Cards = styled.div`
    display: flex;
    justify-content: center;
    height: 300px;
    align-items: center

`;


const SDIV = styled.div`
    border-radius: 5px;
    width: 300px;
    height: 150px;
    padding: 10px 20px;
    box-shadow: 0 2px 15px #000;
    margin-left: 2rem;
`;

const SFigure = styled.figure`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 3rem;
`;

const SImg = styled.img`
    height: 64px;
`;

const Paragrafo = styled.p`
    color: #B98E52;
    font-weight: bolder;
    font-size: 1.2rem;
`;