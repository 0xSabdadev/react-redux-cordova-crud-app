import React, {useState} from 'react'
import {useEffect} from 'react'
import {Form, Button, Container, Col, Row} from 'react-bootstrap'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import services from '../services'

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

    const handleSubmit = async () => {
        try {
            if (!roomName || !roomCapacity || !roomURI) {
                alert('Form must be filled all!')
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
            alert('Berhasil Ditambahkan')
            navigate('/')
        } catch (err) {
            console.log(err)
            alert('Gagal Ditambahkan')
        }
    }
    return (
        <Container className='mt-3'>
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
                <Button variant='primary' type='button' onClick={handleSubmit}>
                    Add Data
                </Button>
            </Form>
        </Container>
    )
}

export default EditActivity
