import React, {Component} from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavLink, Form, FormControl, Button } from "react-bootstrap";
import logo from './logo192.png'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { BrowserRouter as Router, Switch, Route, Link,  } from "react-router-dom";


import Home from '../Pages/Home';
import Geo from '../Pages/Geo';
import Contacts from '../Pages/Contacts';
import Aboutus from '../Pages/Aboutus';


class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand href="/" >
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block aligh-top"
                                alt="logo"
                            />
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav" />
                        <NavbarCollapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <NavLink href="/">Главная</NavLink>
                                <NavLink href="/geo">Геоданные</NavLink>
                                <NavLink href="/contacts">Контакты</NavLink>
                                <NavLink href="/aboutus">О нас</NavLink>
                            </Nav>
                        </NavbarCollapse>


                    </Container>

                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/geo" component={Geo} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/aboutus" component={Aboutus} />
                    </Switch>
                </Router>

            </>
        );
    }
}

export default Header;