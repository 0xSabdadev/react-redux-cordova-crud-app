import React, {useEffect} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import services from '../services'
import DataItem from '../components/DataItem'
import {useState} from 'react'

const HomeActivity = () => {
    const [roomState, setRoomState] = useState(null)
    const fetchDatas = async () => {
        try {
            const resp = await services.getAllDatas()
            setRoomState(resp.data)
        } catch (error) {
            alert(`Failed to fetch room datas...`)
        }
    }
    useEffect(() => {
        fetchDatas()
    }, [])
    if (!roomState) {
        return (
            <Container>
                <Col>
                    <p>Loading Rooms...</p>
                </Col>
            </Container>
        )
    }

    return (
        <Container>
            <Row className='mt-3'>
                <Col>
                    <Button variant='dark' className='me-2'>
                        Rooms Data :
                    </Button>
                </Col>
            </Row>
            <Row className='mt-3' style={{paddingBottom: '80px'}}>
                {roomState.map(room => (
                    <DataItem
                        key={room.id}
                        id={room.id}
                        name={room.name}
                        capacity={room.capacity}
                        url={room.url}
                        thumbnailUrl={room.thumbnailUrl}></DataItem>
                ))}
            </Row>
        </Container>
    )
}

export default HomeActivity
