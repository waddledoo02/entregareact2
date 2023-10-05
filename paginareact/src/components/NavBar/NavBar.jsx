
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavLink to='/categoria/Electrodomesticos'>Electrodomesticos</NavLink>
                            <hr />
                            <NavLink to='/categoria/Celulares'>
                                Celulares
                            </NavLink>
                            <hr />
                            <NavLink to='/categoria/Computadoras'>Computadoras</NavLink>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget></CartWidget>
        </Navbar>
    );
};

export default NavBar;