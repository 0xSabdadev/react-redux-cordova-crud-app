import React from 'react'
import {Container, Row, Col, Button, Card} from 'react-bootstrap'
const DataTeam = ({name, nim, imgUrl}) => {
    return (
        <Col md='auto' lg='4'>
            <Card className='mb-4' style={{background: '#ffffff', border: 'none'}}>
                <Row>
                    <Col xs={3}>
                        <img
                            src={`${imgUrl}`}
                            alt='profile-btn'
                            style={{
                                width: '100%',
                                height: '100%',
                                borderTopLeftRadius: '5px',
                                borderBottomLeftRadius: '5px',
                            }}
                        />
                    </Col>
                    <Col>
                        <p className='fs-5 pt-2 fw-bold' style={{marginBottom: '0px'}}>
                            {name}
                        </p>
                        <p>{nim}</p>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default DataTeam
