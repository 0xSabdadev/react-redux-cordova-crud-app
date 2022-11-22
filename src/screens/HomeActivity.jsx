import React from 'react'
import {Container, Row} from 'react-bootstrap'
import DataItem from '../components/DataItem'

const HomeActivity = () => {
    return (
        <Container>
            <Row>
                <DataItem />
                <DataItem />
                <DataItem />
                <DataItem />
                <DataItem />
                <DataItem />
            </Row>
        </Container>
    )
}

export default HomeActivity
