import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import forestImg from '../asset/forest.jpg'
import delImg from '../asset/del.jpg'
import nip from '../asset/nip.jpg'


class CarouselBox extends Component {
    render() {
        return (
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
        );
    }
}

export default CarouselBox;