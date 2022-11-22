import React from 'react'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar
            sticky='top'
            collapseOnSelect
            expand='lg'
            style={{background: '#FEFEFF'}}
            variant='light'>
            <Container>
                <Link to='/' className='nav-link'>
                    <Navbar.Brand href='#home'>reactcordova</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            </Container>
        </Navbar>
    )
}

export default NavBar
