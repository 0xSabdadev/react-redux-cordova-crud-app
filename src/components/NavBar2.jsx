import React from 'react'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar2 = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand='lg' bg='light' variant='light'>
            <Container>
                <Link to='/' className='nav-link'>
                    <Navbar.Brand href='#home'>reactcordova</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            </Container>
        </Navbar>
    )
}

export default NavBar2
