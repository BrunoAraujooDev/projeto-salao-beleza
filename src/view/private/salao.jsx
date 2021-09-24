import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button, FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";
// import http from "../../config/http";
import { createService } from "../../store/servico/action";

const Salao = () => {

    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    // const [prog, setProg] = useState(0);

    const handleChange = (event) => {
        const { files, value, name } = event.target;
        setForm({
            ...form,
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
        dispatch(createService(form))
        .then(() => toast.success(`Estabelecimento ${form?.titulo} feito com sucesso!`));
        setForm({})
    }


    return (
        <>
            <SBUTTON>
                Editar
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
                        value={form.titulo || ""}
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
                        value={form.telefone || ""}
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
                        value={form.endereco || ""}
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
                        value={form.tipo || ""}
                        onChange={handleChange}
                    >
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
                        value={form.descricao || ""}
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
