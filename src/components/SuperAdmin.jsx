import Table from "react-bootstrap/Table";
import users from "../users.json";
import Button from "react-bootstrap/Button";
const SuperAdmin = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <Button variant="danger">Delete</Button>
                    <Button variant="warning">Edit</Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default SuperAdmin;
