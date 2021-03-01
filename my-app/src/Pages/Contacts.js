import React, {Component} from 'react';
import {Form, Button, Container } from "react-bootstrap"

class Contacts extends Component {
    render() {
        return (
            <Container style = {{width: '500px'}}>
                <h1 className="text-center">Контакты</h1>
                <Form>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholser="email"></Form.Control>
                    </Form.Group>


                    <Form.Group controlId="FormBasicPassword">
                        <Form.Label>Введите текст ниже</Form.Label>
                        <Form.Control as="textarea" rows="3"></Form.Control>
                    </Form.Group>


                    <Form.Group controlId="formBasicCheckBox">
                        <Form.Check type="CheckBox" lable="Проверить"> </Form.Check>
                    </Form.Group>


                    <Button variant="primary" type="submit">Текст</Button>

                </Form>
            </Container>
        );
    }
}

export default Contacts;