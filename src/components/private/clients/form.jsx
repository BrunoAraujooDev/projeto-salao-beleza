import { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

const Form = ({ action, edit }) => {
  
    const [form, setForm] = useState({
      ...edit.data,
    });

    const handlechange = (event) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    }

    return (
        <FormContainer>
      <FormGroup className="my-3">
        <Label for="Nome">Proprietário:</Label>
        <Input
          type="text"
          name="Nome"
          id="Nome"
          placeholder="Informe o nome do proprietário"
          value={form.Nome|| ""}
          onChange={handlechange}
        />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="titulo">Nome do estabelecimento:</Label>
        <Input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Informe o nome do estabelecimento"
          value={form.titulo || ""}
          onChange={handlechange}
        />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Informe seu melhor email"
          value={form.email || ""}
          onChange={handlechange}
        />
      </FormGroup>
      <Button size="m" onClick={() => action(form)}>
        {edit.status ? "Editar" : "Enviar"}
      </Button>
    </FormContainer>
    );
}

export default Form;

const FormContainer = styled.div`   
`;