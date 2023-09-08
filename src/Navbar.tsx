import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export  function Navbarr() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/Home">Aplicaciones</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="/task" style={{color:'#337DFF'}} >Lista de Tareas</Nav.Link>
                        <Nav.Link href="/geometry" style={{color:'#337DFF'}}>Calculadora Geométrica</Nav.Link>
                        <Nav.Link href="/contact" style={{color:'#337DFF'}} >Gestor de Contactos</Nav.Link>
                        <Nav.Link href="/library" style={{color:'#337DFF'}}>Biblioteca Virtual</Nav.Link>
                        <Nav.Link href="/simulador" style={{color:'#337DFF'}}>Simulacion de mascotas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}







