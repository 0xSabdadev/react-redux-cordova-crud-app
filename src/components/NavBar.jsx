import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap'

const NavBar = args => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar {...args} color='dark' dark expand='md'>
                <NavbarBrand href='/' className='ps-lg-5'>
                    reactcrud
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    {/* <Nav className='me-auto' navbar>
                        <NavItem>
                            <NavLink href='/components/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='https://github.com/reactstrap/reactstrap'>About</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Admin</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
