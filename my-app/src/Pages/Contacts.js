import React, {Component} from 'react';
import {Form, Button, Container } from "react-bootstrap"

class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1>Контакты</h1>
                <Form>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Lable>Email</Form.Lable>
                        <Form.Control type="email" placeholser="email"></Form.Control>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Lable>Example textariea</Form.Lable>
                        <Form.Control as="textarea" rows="3"></Form.Control>
                    </Form.Group>


                    <Form.Group controlId="formBasicChexBox">
                        <Form.Check type="CheckBox" lable="Проверить"> </Form.Check>
                    </Form.Group>


                    <Button variant="primary" type="submit">Текст</Button>

                </Form>
            </Container>
        );
    }
}

export default Contacts;