/* Importamos componentes de React Bootstrap */
import { Container, Row, Col, Button } from 'react-bootstrap';

function LandingPage() {
  return (
    <Container className="mt-5">
      {/* Usamos el sistema de rejilla (Grid) de Bootstrap que suele mencionarse en estos cursos */}
      <Row className="align-items-center text-center">
        <Col md={4}>
          {/* Foto de perfil: Puedes usar una URL de internet o una local en /public */}
          <img 
            src="/perfil.jpg" 
            alt="Mi Foto" 
            className="img-fluid rounded-circle shadow" 
          />
        </Col>
        
        <Col md={8}>
          {/* Tu información personal */}
          <h1 className="display-4">Hola, soy Celestino</h1>
          <p className="lead">Estudiante de DWEC, haciendo tarea de la Unidad 6</p>
          <hr />
          <p>
           Actualmente estoy aprendiendo a manipular el DOM y a crear aplicaciones modernas con React.
          </p>
          
          {/* Listado de habilidades (Cualidades que pide la actividad) */}
          <div className="mb-4">
            <span className="badge bg-primary m-1">JavaScript</span>
            <span className="badge bg-success m-1">React</span>
            <span className="badge bg-info m-1">Bootstrap</span>
          </div>

          {/* Enlaces a redes sociales y descarga de CV */}
          <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com" className="btn btn-dark">GitHub</a>
            <a href="https://linkedin.com" className="btn btn-primary">LinkedIn</a>
            {/* El PDF del CV debe estar en la carpeta 'public' */}
            <Button variant="outline-danger" href="/celescv.pdf" download>
              Descargar CV (PDF)
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;