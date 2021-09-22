import { Table } from "reactstrap";

const User = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th>Liniker</th>
          <th>contato@liniker.com.br</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default User;
