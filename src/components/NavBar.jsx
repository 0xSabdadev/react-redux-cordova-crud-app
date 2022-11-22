import React from 'react'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>
                <Link to='/' className='nav-link'>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/add' className='nav-link'>
                            Tambah Data
                        </Link>
                    </Nav>
                    <Nav>
                        <Link eventKey={2} to='/add' className='nav-link'>
                            Kel6PBP
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
