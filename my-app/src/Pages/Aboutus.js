import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'
import Nip from './Nip.jpg'


class Aboutus extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> Разработчики </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> О сайте </Nav.Link>
                                </Nav.Item>


                            </Nav>

                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img
                                        src={Nip}
                                        height="500"
                                        width="900"
                                        className="d-inline-block aligh-top"
                                        alt="Nip"
                                    />
                                    <p>Сайт был Разработан </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                                        src={Nip}
                                        height="500"
                                        width="900"
                                        className="d-inline-block aligh-top"
                                        alt="Nip"
                                    />
                                    <p>Сайт создан для упрощения доставки грузов и отслеживаю их
                                    местоположения</p>


                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default Aboutus;