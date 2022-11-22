import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Button, Spinner} from 'react-bootstrap'
import services from '../services/Services'
import DataItem from '../components/DataItem'
import {useDispatch, useSelector} from 'react-redux'

const HomeActivity = () => {
    const [roomState, setRoomState] = useState(null)
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const fetchDatas = async () => {
        try {
            const resp = await services.getAllDatas()
            setRoomState(resp.data)
            dispatch({
                type: 'reset',
            })
            dispatch({
                type: 'plus',
                sum: resp.data.length,
            })
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
                            Loading API...
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
        <Container>
            <Row className='mt-3'>
                <Col>
                    <Button style={{background: '#696CFF'}} className='me-2'>
                        Rooms Data :{' '}
                        <span className='badge' style={{background: '#FF3E1D'}}>
                            {state.room}
                        </span>
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
