import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/private/clients/form";
import styled from "styled-components";
import TableList from "../../components/private/clients/tablelist";
import { createClient, getClients } from "../../store/client/action";
import { toast } from "react-toastify";
import { FormGroup, Input } from "reactstrap";

const Clients = () => {

  const dispatch = useDispatch();
  const clients = useSelector(state => state.client.all);
  const count = useSelector(state => state.client.count);
  const [hasForm, setHasForm] = useState(false);
  const [paginator, setPaginator] = useState({
    offset: 1,
    limit: 10
  })
  const [edit, setEdit] = useState({
    status: false,
    data: {},
  });

  const totalPage = () => Math.ceil(count / paginator.limit);

  const toggleForm = () => setHasForm(!hasForm);

  const paginate = (page) => setPaginator({ ...paginator, offset: page });

  const submitClient = data => {
    dispatch(createClient(data))
      .then(data => {
        setHasForm(false);
        toast.success(`Cliente ${data.Nome} cadastrado com sucesso`);
        toggleForm();
        dispatch(getClients);
      })
      .catch(erro => console.log("erro", erro))
  }

  const handleLimit = (event) => {
    setPaginator({ ...paginator, limit: event.target.value });
  }

  const handleEdit = item => {
    setHasForm(true);
    setEdit({
      status: true,
      data: item,
    });
  };

  useEffect(() => {
    if (hasForm === false){
      setEdit({
        status: false,
        data: {},
      });
    };
  }, [hasForm]);

  useEffect(() => {
    dispatch(getClients(paginator.offset, paginator.limit))
  }, [dispatch, paginator])


  const Action = () => (
    <ActionPage>
      <div className="menuAction">
        <SBUTTON
          onClick={toggleForm}>
          {hasForm ? "Listar clientes" : "Novo cliente +"}
        </SBUTTON>
      </div>
      <div>
        <FormGroup>
          <Input type="select" name="select" onChange={handleLimit} value={paginator.limit}>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </Input>
        </FormGroup>
      </div>
    </ActionPage>
  );

  if (hasForm) {
    return (
      <>
        <Action />
        <Form action={submitClient} edit={edit} />
      </>
    );
  }


  return (
    <>

      <Action />
      <TableList
        data={clients || []}
        paginate={paginate}
        total={totalPage}
        current={paginator.offset}
        edit={handleEdit}
      />
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

const ActionPage = styled.div`
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  .menuAction {
    flex: 1;
  }
`;