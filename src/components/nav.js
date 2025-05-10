import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function ListExample() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ListExample;
