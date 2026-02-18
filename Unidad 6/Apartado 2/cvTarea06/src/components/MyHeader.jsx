/* Importamos los componentes necesarios de las librerías */
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyHeader() {
  return (
    <header>
      {/* Navbar de Bootstrap con color oscuro (dark) */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* El logo o nombre de la web que nos lleva al Inicio */}
          <Navbar.Brand as={Link} to="/">Mi CV</Navbar.Brand>
          
          {/* Botón para pantallas pequeñas (móviles) */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Enlaces de navegación usando 'Link' para que no recargue la página */}
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/experiencia">Experiencia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyHeader;