import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const CardRick = ({ img, name, id, profile = null }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {profile ? <Card.Text>

          <p>ciudad: {profile.city}</p>
          <p>status: {profile.status}</p>
          <p>status: {profile.species}</p>
        </Card.Text> : null}
        <Button
          variant="primary"
          onClick={() => {
            navigate(`/profile/${id}`);
          }}
        >
          Mas Informacion
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardRick;
