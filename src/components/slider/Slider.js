import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import pc from '../../images/pctech.jpg';

import photo1 from '../../images/chin1.jpg';
import photo2 from '../../images/dudechin.jpg';
import photo3 from '../../images/motherplat.jpg';
import Services from '../../pages/Services';

export default class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>

                    <Carousel.Item>
                        <Link to="/services">
                            <img
                                src={photo1} alt="Ms" className="d-block w-100"
                            />
                        </Link>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Link to="/pc">
                            <img
                                src={photo2} alt="Ms" className="d-block w-100"
                            />
                        </Link>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Link to="/services">
                            <img
                                src={photo3} alt="Ms" className="d-block w-100"
                            />
                            {/* <Carousel.Caption>
                                <h3>Ms image</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, cum?</p>
                            </Carousel.Caption> */}
                        </Link>
                    </Carousel.Item>

                </Carousel>
            </div>
        )
    }
}