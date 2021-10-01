import styled from "styled-components";
import view from "../../../assets/images/views.png";
import rating from "../../../assets/images/rating.png";

const Info = ({usuario, servico}) => {


    return (
        <article>
            <SH2>Estabelecimento:  <strong>{servico.titulo || ""}</strong></SH2>
            <Cards>
                <SDIV>
                    <SFigure>
                        <figcaption>{servico.contador}</figcaption>
                        <SImg src={view} alt="Ícone de visualização"/>
                    </SFigure>
                    <Paragrafo>Visualizações</Paragrafo>
                </SDIV>
                <SDIV>
                    <SFigure>
                        <figcaption>{servico.mensagem}</figcaption>
                        <SImg src={rating} alt="Ícone de visualização"/>
                    </SFigure>
                    <Paragrafo>Avaliações</Paragrafo>
                </SDIV>
            </Cards>
        </article>
    )
}

export default Info;

const SH2 = styled.h2`
    margin: 32px 0px 64px 0px;
`;

const Cards = styled.div`
    display: flex;

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