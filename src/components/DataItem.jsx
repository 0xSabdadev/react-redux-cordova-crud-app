import React from 'react'
import {Card, Button, Col, Row} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import services from '../services'

const DataItem = ({id, name, capacity, thumbnailUrl}) => {
    const navigate = useNavigate()
    const handleDelete = async () => {
        try {
            await services.deleteDatas(id)
            alert('Photo Deleted')
            window.location.reload()
        } catch (err) {
            console.log(err)
            alert('Delete Failed')
        }
    }
    return (
        <Col md='auto' lg='4'>
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={thumbnailUrl}
                    style={{width: '100%', height: '9rem'}}
                />
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>Capacity : {capacity}</Card.Text>
                        </Col>
                        <Col className='text-end'>
                            <Link to={{pathname: `/edit/${id}`}} state={{id_item: id}}>
                                <Button variant='primary' className='me-2'>
                                    Edit
                                </Button>
                            </Link>
                            <Button variant='danger' onClick={handleDelete}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DataItem
