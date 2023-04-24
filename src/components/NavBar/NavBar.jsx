import { Navbar, Container , NavDropdown, Nav} from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = ()=>{
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">EcoSwitch</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Cuidado Capilar</Nav.Link>
            <Nav.Link href="#pricing">Cuidado Facial</Nav.Link>
            <NavDropdown title="Sale" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cabello</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cuerpo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rostro</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sorpresas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    )
}