import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/private/clients/form";
import styled from "styled-components";
import TableList from "../../components/private/clients/tablelist";
import { createClient, getClients } from "../../store/client/action";
import { toast } from "react-toastify";

const Clients = () => {

    const [hasForm, setHasForm] = useState(false);
    const dispatch = useDispatch();
    const clients = useSelector(state => state.client.all)

    const toggleForm = () => setHasForm(!hasForm);

    const submitClient = data => {
        dispatch(createClient(data))
        .then(data => {
            setHasForm(false);
            toast.sucess(`Cliente ${data.Nome} cadastrado com sucesso`);
        })
        .catch(erro => console.log("erro", erro))
    }

    useEffect(() => {
        dispatch(getClients())
    }, [dispatch])
    return (
        <>
            <SBUTTON 
            onClick={toggleForm}>
               {hasForm ? "Listar clientes" : "Novo cliente +"} 
            </SBUTTON>
            
           {hasForm ?  <Form action={submitClient}/> : <TableList data={clients} />}
        </>
    )

}

export default Clients;


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