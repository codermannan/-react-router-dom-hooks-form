import React from 'react'
import {Link, useEffect, Outlet, useNavigate} from 'react-router-dom'
import {Row,Col,Card,ListGroup,ListGroupItem} from 'react-bootstrap'


export const About = ({ company }) => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate('/about/founder');
    },[navigate]);

    return (
        <Row>
            <h2> About {company}</h2>
            <Col sm={5}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Link to="company/ds">Company</Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link to="founder">Founder</Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
            <Col sm={7}>
                <Outlet />
            </Col>
        </Row>
        
    )
}