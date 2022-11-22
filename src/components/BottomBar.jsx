import React from 'react'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

const BottomBar = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const handleHomeClick = () => {
        dispatch({
            type: 'home',
        })
    }
    const handleAddClick = () => {
        dispatch({
            type: 'add',
        })
    }
    const handleTeamClick = () => {
        dispatch({
            type: 'team',
        })
    }
    return (
        <Navbar fixed='bottom' style={{background: '#FEFEFF'}} variant='light'>
            <Container>
                <ul className='navbar-nav nav-justified w-100'>
                    <li className='nav-item'>
                        <Link
                            to='/'
                            className='nav-link text-center'
                            onClick={handleHomeClick}
                            style={
                                state.css && (state.isActive == 1 || state.isActive == null)
                                    ? state.css
                                    : {}
                            }>
                            <svg
                                width='1.5em'
                                height='1.5em'
                                viewBox='0 0 16 16'
                                className='bi bi-house'
                                fill='currentColor'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fillRule='evenodd'
                                    d='M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
                                />
                                <path
                                    fillRule='evenodd'
                                    d='M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z'
                                />
                            </svg>
                            <span className='small d-block'>Home</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/add'
                            className='nav-link text-center'
                            onClick={handleAddClick}
                            style={state.css && state.isActive == 2 ? state.css : {}}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='1.5em'
                                height='1.5em'
                                fill='currentColor'
                                className='bi bi-plus-circle'
                                viewBox='0 0 16 16'>
                                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                                <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
                            </svg>
                            <span className='small d-block'>Add Data</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/team'
                            className='nav-link text-center '
                            onClick={handleTeamClick}
                            style={state.css && state.isActive == 3 ? state.css : {}}>
                            <svg
                                width='1.5em'
                                height='1.5em'
                                viewBox='0 0 16 16'
                                className='bi bi-person'
                                fill='currentColor'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fillRule='evenodd'
                                    d='M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'
                                />
                            </svg>
                            <span className='small d-block'>Team</span>
                        </Link>
                    </li>
                </ul>
            </Container>
        </Navbar>
    )
}

export default BottomBar
