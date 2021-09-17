import { Table } from "reactstrap";
import {FaEdit, FaTrash} from "react-icons/fa";
import styled from "styled-components";


const TableList = ({data}) => {

    console.log('data', data)
    return (
        <Table dark>
            <thead>
                <tr>
                    <th></th>
                    <th>Proprietário</th>
                    <th>Nome do estabelecimento</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,i ) =>
                    <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{item.Nome}</td>
                        <td>{item.titulo.titulo}</td>
                        <td>{item.email}</td>
                        <td>
                            <Actions>
                                <FaEdit title="editar"/>
                                <FaTrash title="excluir"/>
                            </Actions>
                        </td>
                    </tr>
                )};
            </tbody>
        </Table>
    )
}

export default TableList;

const Actions = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 100px;
    cursor: pointer;

    svg:hover{
        color: grey;
    }
`;