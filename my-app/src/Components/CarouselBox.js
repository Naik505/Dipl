import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Form, FormControl, Button } from "react-bootstrap";

import forestImg from '../asset/forest.jpg'
import delImg from '../asset/del.jpg'
import nip from '../asset/nip.jpg'


class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ forestImg }
                            alt="forest.jpg"
                        />

                        <Carousel.Caption>

                            <h3>
                                Primer or proba
                            </h3>
                            <p> Smotru kak</p>
                        </Carousel.Caption>
                    </Carousel.Item>



                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ delImg }
                            alt="del.jpg"
                        />

                        <Carousel.Caption>

                            <h3>
                                Primer or proba
                            </h3>
                            <p> Smotru kak</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ nip }
                            alt="nip.jpg"
                        />

                        <Carousel.Caption>
                            <h3>
                                Primer or proba
                            </h3>
                            <p> Smotru kak</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Form  >

                    <FormControl
                        type="text"
                        placeholder="Текст"
                        className="mr-sm-2"

                    />


                    <FormControl
                        type="text"
                        placeholder="Город"
                        className="mr-sm-2"

                    />
                    <FormControl
                        type="date"
                        placeholder="Search"
                        className="mr-sm-2"

                    />

                    <Button variant="outline-info">Поиск</Button>
                    </Form>
            </div>
    );
    }
    }

    export default CarouselBox;