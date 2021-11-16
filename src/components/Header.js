import React from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search a product"
                        className="m-auto"
                    />

                </Navbar.Text>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" >
                    <FaShoppingCart color="white" fontSize="25px"/>
                    <Badge  bg="secondary">{10}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header


//m-auto gives equal spacing btween elements
//Form.control is input box in bootstrap