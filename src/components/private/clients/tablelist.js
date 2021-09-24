import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { range } from "ramda";



const TableList = ({ data, paginate, current, total, edit, askDelete}) => {

    return (
        <>
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
                    {data.map((item, i) =>
                        <tr key={i}>
                            <th scope="row">{i}</th>
                            <td>{item.Nome}</td>
                            <td>{item.titulo.titulo}</td>
                            <td>{item.email}</td>
                            <td>
                                <Actions>
                                    <FaEdit title="editar" onClick={() => edit(item)}/>
                                    <FaTrash title="excluir" className="text-danger" onClick={() => askDelete(item)}/>
                                </Actions>
                            </td>
                        </tr>
                    )};
                </tbody>
            </Table>
            <Pagination
                aria-label="Page navigation"
                className={`${total() === 1 ? "d-none" : "d-flex"
                    }  justify-content-center`}
            >
                <PaginationItem disabled={current === 1}>
                    <PaginationLink previous onClick={() => paginate(current - 1)} />
                </PaginationItem>
                {range(1, total() + 1).map((item) => (
                    <PaginationItem key={item} active={item === current}>
                        <PaginationLink onClick={() => paginate(item)}>
                            {item}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem disabled={total() === current}>
                    <PaginationLink next onClick={() => paginate(current + 1)} />
                </PaginationItem>
            </Pagination>
        </>
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