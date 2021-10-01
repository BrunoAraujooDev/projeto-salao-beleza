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
          <th>Renata Magalhães</th>
          <th>renata@gmail.com</th>
        </tr>
        <tr>
          <th>2</th>
          <th>Rodrigo Lopes</th>
          <th>rodrigo@gmail.com</th>
        </tr>
        <tr>
          <th>3</th>
          <th>Luiz Eduardo</th>
          <th>luizeduardo@gmail.com</th>
        </tr>
        
      </tbody>
    </Table>
  );
};

export default User;
