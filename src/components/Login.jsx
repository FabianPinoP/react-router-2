import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContex";
import { useContext } from "react";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "Debes completar todos los campos",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    if (email == "test@test.com" && password == "123456") {
      Swal.fire({
        title: "Success!",
        text: "Bienvenido",
        icon: "success",
        timer: 1000,
      });
      setUser({email: email, password: password, admin: false});
      navigate("/characters");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Usuario no registrado seras derivado a la pagina de registro",
        icon: "info",
        timer: 1000,
      });
      navigate("/register");
    }
  };
  return (
    <div className=" mt-5 d-flex justify-content-center">
      <div>
        <Container className="container-form">
          <Form className="mt-3 mb-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
