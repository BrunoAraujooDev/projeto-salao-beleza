import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button, FormGroup, Input, Label, Table } from "reactstrap";
import styled from "styled-components";
import { createService, editService } from "../../store/servico/action";

const Salao = () => {

    const dispatch = useDispatch();
    
    const usuario = useSelector(state => state.auth.auth.user);
    const [estado, setEstado] = useState(true);
    const [servicos, setServicos] = useState({...usuario.servico});

    const handleChange = (event) => {
        const { files, value, name } = event.target;
        setServicos({
            ...servicos,
            [name]: files?.length > 0 ? files[0] : value,
        });
        
    };


    const submit = () => {
        // const formData = new FormData();
        // Object.keys(form).map(key => formData.append(key, form[key]));
        // http.post("http://httpbin.org/post", formData, {
        //     onUploadProgress: (event) => {
        //         let progress = Math.round(event.loaded * 100 / event.total);
        //         setProg(progress);
        //     }
        if (usuario.servico) {
            dispatch(editService({ ...servicos, id: usuario.servico.id }))
                .then(() => toast.success("Dados atualizados com sucesso!"))
                setServicos({})
            setEstado(!estado);
        } else {

            dispatch(createService({ ...servicos, user_id: usuario.id }))
                .then(() => toast.success(`Estabelecimento ${servicos?.titulo} feito com sucesso!`));
                setServicos({})
            setEstado(!estado);
        }
    }

    
    if (usuario.servico && estado) {
        return <>
            <Table dark>
                <thead>
                    <tr>
                        <th>Nome do estabelecimento</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Descrição</th>
                        <th>Tipo</th>
                        <th>Bairro</th>
                        <th>Visualizações</th>
                        <th>Avaliações</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.servico.titulo}</td>
                        <td>{usuario.servico.endereco}</td>
                        <td>{usuario.servico.telefone}</td>
                        <td>{usuario.servico.descricao}</td>
                        <td>{usuario.servico.tipo}</td>
                        <td>{usuario.servico.bairro}</td>
                        <td>{usuario.servico.contador}</td>
                        <td>{usuario.servico.mensagem}</td>
                        <td>
                            <Actions>
                                <FaEdit title="editar" onClick={() => setEstado(!estado)} />
                                <FaTrash title="excluir" className="text-danger" />
                            </Actions>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    }

    return (
        <>
            <SBUTTON onClick={() => setEstado(!estado)}>
                Listar estabelecimentos
            </SBUTTON>
            <Container>
                {/* <Progress className="prg" bar color="success" value={prog} /> */}
                <FormGroup className="my-3">
                    <Label for="titulo">Cadastre seu estabelecimento:</Label>
                    <Input
                        type="text"
                        name="titulo"
                        id="titulo"
                        placeholder="Informe o nome do estabelecimento"
                        value={servicos.titulo || ""}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className="my-3">
                    <Label for="telefone">Telefone:</Label>
                    <Input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        placeholder="Informe o Telefone"
                        value={servicos.telefone || ""}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className="my-3">
                    <Label for="endereco">Endereço:</Label>
                    <Input
                        type="text"
                        name="endereco"
                        id="endereco"
                        placeholder="Informe o Endereço"
                        value={servicos.endereco || ""}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className="my-3">
                    <Label for="bairro">Bairro:</Label>
                    <Input
                        type="text"
                        name="bairro"
                        id="bairro"
                        placeholder="Informe o Endereço"
                        value={servicos.bairro || ""}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className="my-3">
                    <Label for="tipo">Público-alvo:</Label>
                    <Input
                        type="select"
                        name="tipo"
                        id="tipo"
                        placeholder="Informe o Tipo do salão"
                        value={servicos.tipo || ""}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Selecione um tipo</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Unissex">Unissex</option>
                    </Input>
                </FormGroup>
                <FormGroup className="my-3">
                    <Label for="descricao">Descrição:</Label>
                    <Input
                        type="textarea"
                        name="descricao"
                        id="descricao"
                        placeholder="Informe uma descrição"
                        value={servicos.descricao || ""}
                        onChange={handleChange}
                    />
                </FormGroup>
                {/* <FormGroup className="my-3">
                    <Label for="email">Imagem ou logo:</Label>
                    <input type="file" name="print" id="print" onChange={handleChange} />
                </FormGroup> */}
                <FormGroup className="my-3">
                    <Button size="sm" onClick={submit}>
                        Enviar
                    </Button>
                </FormGroup>
            </Container>
        </>

    )
}

export default Salao;


const SBUTTON = styled.button`
    background-color: #944E32;
    color: #fff;
    border-radius: 0px;
    border: 1px solid #000;
    box-shadow: 0 2px 4px #000;
    padding: 5px 10px;
    margin-bottom: 32px;
    &:hover {
    background-color: #7d3011;
    border-color: #000;
}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .prg {
    width: 200px;
    height: 20px;
  }
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 100px;
    cursor: pointer;

    svg:hover{
        color: grey;
    }
`;