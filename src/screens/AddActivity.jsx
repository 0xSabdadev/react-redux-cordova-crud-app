import React, {useState} from 'react'
import {Form, Button, Container, Col, Row} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import services from '../services/Services'
import Swal from 'sweetalert2'
import {useDispatch} from 'react-redux'

const AddActivity = () => {
    const dispatch = useDispatch()
    const handlePlus = () => {
        dispatch({
            type: 'plus',
            sum: 1,
        })
    }
    const [roomName, setRoomName] = useState('')
    const [roomCapacity, setRoomCapacity] = useState('')
    const [roomURI, setRoomURI] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async () => {
        try {
            if (!roomName || !roomCapacity) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Room name and Capacity must be filled',
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
            if (roomURI == '') {
                var rooms = {
                    roomsId: 1,
                    name: roomName,
                    capacity: roomCapacity,
                    thumbnailUrl: 'https://via.placeholder.com/150/771796',
                }
            } else {
                var rooms = {
                    roomsId: 1,
                    name: roomName,
                    capacity: roomCapacity,
                    thumbnailUrl: roomURI,
                }
            }
            await services.postDatas(rooms).then(handlePlus())
            Swal.fire({
                title: 'Success!',
                timer: 1500,
                text: 'Data has been added!',
                icon: 'success',
                showConfirmButton: false,
            })
            navigate('/')
        } catch (err) {
            console.log(err)
            Swal.fire({
                title: 'Error!',
                text: 'ERR POST DATA TO API',
                icon: 'error',
                confirmButtonText: 'Retry',
            })
        }
    }
    return (
        <Container className='mt-3'>
            <div className='p-4' style={{background: '#FEFEFF', borderRadius: '10px'}}>
                <h1>Input Data</h1>
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
                    <Button style={{background: '#696CFF'}} type='button' onClick={handleSubmit}>
                        Add Data
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default AddActivity
