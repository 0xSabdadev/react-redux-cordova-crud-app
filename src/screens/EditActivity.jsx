import React, {useState} from 'react'
import {useEffect} from 'react'
import {Form, Button, Container, Col, Row, Spinner} from 'react-bootstrap'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import services from '../services/Services'
import Swal from 'sweetalert2'

const EditActivity = props => {
    const [roomName, setRoomName] = useState('')
    const [roomCapacity, setRoomCapacity] = useState('')
    const [roomURI, setRoomURI] = useState('')
    const [roomState, setRoomState] = useState(null)
    const navigate = useNavigate()
    const {state} = useLocation()
    const id = state.id_item

    const fetchDatas = async () => {
        try {
            const resp = await services.editDatas(id)
            setRoomState(resp.data)
            setRoomName(resp.data.name)
            setRoomCapacity(resp.data.capacity)
            setRoomURI(resp.data.thumbnailUrl)
        } catch (error) {
            alert(`Failed to fetch room datas...`)
        }
    }
    useEffect(() => {
        fetchDatas()
    }, [])
    if (!roomState) {
        return (
            <Container style={{paddingTop: '280px'}}>
                <Row className='text-center '>
                    <Col>
                        <Button style={{background: '#696CFF'}}>
                            <Spinner
                                as='span'
                                animation='grow'
                                size='md'
                                role='status'
                                aria-hidden='true'
                                className='me-2'
                            />
                            Loading Data...
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
    const handleSubmit = async () => {
        try {
            if (!roomName || !roomCapacity) {
                Swal.fire({
                    title: 'Error!',
                    text: 'All input must be filled',
                    icon: 'error',
                    confirmButtonText: 'Retry',
                })
                return
            }
            if (roomCapacity.match('^[0-9]+$') == null) {
                Swal.fire({
                    title: 'Error!',
                    text: 'input must be numeric',
                    icon: 'error',
                    confirmButtonText: 'Retry',
                })
                return
            }
            const rooms = {
                id: id,
                roomsId: 1,
                name: roomName,
                capacity: roomCapacity,
                thumbnailUrl: roomURI,
            }
            await services.updateDatas(rooms)
            Swal.fire({
                title: 'Success!',
                timer: 1500,
                text: 'Data has been updated!',
                icon: 'success',
                showConfirmButton: false,
            })
            navigate('/')
        } catch (err) {
            console.log(err)
            Swal.fire({
                title: 'Error!',
                text: 'ERR UPDATE DATA TO API',
                icon: 'error',
                confirmButtonText: 'Retry',
            })
        }
    }
    return (
        <Container className='mt-3'>
            <div className='p-4' style={{background: '#FEFEFF', borderRadius: '10px'}}>
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Room Name:</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter room'
                            value={roomName}
                            onChange={e => setRoomName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Capacity:</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Capacity'
                            value={roomCapacity}
                            onChange={e => setRoomCapacity(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Image URI</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Image'
                            value={roomURI}
                            onChange={e => setRoomURI(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        variant='warning'
                        className='text-light'
                        type='button'
                        onClick={handleSubmit}>
                        Update Data
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default EditActivity
