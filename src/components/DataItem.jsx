import React from 'react'
import {Card, Button, Col, Row} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import services from '../services/Services'
import Swal from 'sweetalert2'

const DataItem = ({id, name, capacity, thumbnailUrl}) => {
    const navigate = useNavigate()
    const handleDelete = async () => {
        try {
            await services.deleteDatas(id)
            Swal.fire({
                title: 'Success!',
                timer: 1500,
                text: 'Data has been updated!',
                icon: 'success',
                showConfirmButton: false,
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
            Swal.fire({
                title: 'Error!',
                text: 'ERR DELETE DATA TO API',
                icon: 'error',
                confirmButtonText: 'Retry',
            })
        }
    }
    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#696CFF',
            cancelButtonColor: '#FF3E1D',
            confirmButtonText: 'Delete',
        }).then(result => {
            if (result.isConfirmed) {
                handleDelete()
            }
        })
    }
    return (
        <Col md='auto' lg='4'>
            <Card className='mb-4' style={{background: '#ffffff', border: 'none'}}>
                <Card.Img
                    variant='top'
                    src={thumbnailUrl}
                    style={{width: '100%', height: '9rem'}}
                />
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title className='text-dark fw-bold'>{name}</Card.Title>
                            <Card.Text className='text-dark'>
                                Capacity : <span className='text-info fw-bold'>{capacity}</span>{' '}
                            </Card.Text>
                        </Col>
                        <Col className='text-end'>
                            <Link to={{pathname: `/edit/${id}`}} state={{id_item: id}}>
                                <Button
                                    style={{background: '#FFAB00', border: 'none'}}
                                    className='me-2 text-light'>
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                style={{background: '#FF3E1D', border: 'none'}}
                                onClick={onDeleteClicked}>
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
