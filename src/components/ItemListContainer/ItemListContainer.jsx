import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function productos() {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src="./public/eco.jpg" />
      <Card.Body>
        <Card.Title>crema karitee Ag</Card.Title>
        <Card.Text>
          detalle:crema antiedad realizada con karitee y acido hialuronico
          recomenda para mayores de 30 años.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>precio: $1000</ListGroup.Item>
        <ListGroup.Item>stock: 10 unidades</ListGroup.Item>
        <ListGroup.Item>tipo: antiedad</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"></Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default productos;
