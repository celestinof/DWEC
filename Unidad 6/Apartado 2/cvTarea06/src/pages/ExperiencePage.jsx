import { Container, Card, Row, Col } from 'react-bootstrap';

function ExperiencePage() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Mi Experiencia</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Formación Académica</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Grado Superior DAW</Card.Subtitle>
              <Card.Text>
                Aprendiendo desarrollo web en entorno cliente (DWEC) con enfoque en React.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>Experiencia Laboral</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Proyecto React</Card.Subtitle>
              <Card.Text>
                Desarrollo de una Single Page Application (SPA) para la gestión de un currículum personal.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ExperiencePage;