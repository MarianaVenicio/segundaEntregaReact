import {Link,NavLink, useParams} from "react-router-dom"
import { Navbar, Container , NavDropdown, Nav} from "react-bootstrap"
import  {CartWidget}  from "../CartWidget/CartWidget"

export const NavBar = ()=>{
  
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to = '/' className='alert alert-success'>
          EcoSwitch
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/categoria/cuidado capilar' className={({isActive}) => isActive? 'btn btn-primary':'btn btn-outline-primary' } >Cuidado Capilar</Nav.Link>
            <Nav.Link to='/categoria/cuidado facial'className={({isActive}) => isActive? 'btn btn-primary':'btn btn-outline-primary' } >Cuidado Facial</Nav.Link>
            </Nav>
  
            <Nav>
                <Link className="" to= '/Cart'>
                <CartWidget/>
                </Link>
              </Nav>

              
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    )
}





